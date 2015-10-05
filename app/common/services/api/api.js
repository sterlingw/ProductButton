/***
 *
 */
app.factory('api', function($http, $q, config, Product, ProductComment){
    var api = {};

    /**
     * @private
     * @param {object} data - product data from API response
     */
    function transformGetProductById(data) {
        if (angular.isUndefined(data)) throw new Error('Missing data');

        /**
         *
         */
        function rec(comment) {
            var productComment = new ProductComment({
                id:              comment.id,
                body:            comment.body,
                childComments:   comment.child_comments,
                postedAt:        comment.created_at,
                upvotes:         comment.votes,
                postedBy:        comment.user.name,
                parentCommentId: comment.parent_comment_id
            });

            // If comments exist
            if (angular.isArray(comment.child_comments) && comment.child_comments.length) {
                productComment.childComments = productComment.childComments.map(rec);
            }

            return productComment;
        }

        return new Product({
            voteCount:      data.votes_count,
            name:           data.name,
            tagline:        data.tagline,
            productHuntUrl: data.discussion_url,
            datePosted:     data.created_at,
            commentCount:   data.comments_count,
            comments:       data.comments.map(rec)
        });
    }

    /**
     * @private
     * @param {array} products
     */
    function getRandomProductId(products){
        return (products[Math.floor(Math.random() * (products.length))]).id;
    };

    /**
     *
     */
    api.getProducts = function(){
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: config.API.POSTS,
            headers: {
                'Authorization': 'Bearer ' + config.API.TOKEN
            }
        }).then(function(res){
            defer.resolve(res);
        }, 
        function(err){
            defer.reject(err);
        });

        return defer.promise;
    };

    /**
     *
     */
    api.getRandomProductId = function(){
        var defer = $q.defer();

        api.getProducts().then(function(res){
            defer.resolve(getRandomProductId(res.data.posts));
        }, function(err){
            defer.reject(err);
        });

        return defer.promise;
    };

    /**
     *
     */
    api.getProductById = function(id){
        if (angular.isUndefined(id)) throw new Error('missing id');
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: config.API.POSTS + id,
            headers: {
                'Authorization': 'Bearer ' + config.API.TOKEN
            }
        }).then(function(res){
            defer.resolve(transformGetProductById(res.data.post));
        }, 
        function(err){
            defer.reject(err);
        });

        return defer.promise;
    };

    return api;
});