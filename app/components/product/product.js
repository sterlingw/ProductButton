/**
 *
 */
app.controller('productCtrl', function($stateParams, api, Product, ProductComment, $window){
    var self = this;
    var id = $stateParams.id;

    /* Get and format Product and Comment data */
    api.getProductById(id).then(function(data){
        var comments = data.comments.map(function(comment){
            return new ProductComment({
                body:          comment.body,
                childComments: [],
                postedAt:      comment.created_at,
                upvotes:       comment.votes,
                postedBy:      comment.user.username
            });
        });

        self.product = new Product({
            voteCount:      data.votes_count,
            name:           data.name,
            tagline:        data.tagline,
            productHuntUrl: data.discussion_url,
            datePosted:     data.created_at,
            commentCount:   data.comments_count,
            comments:       comments
        });
    }, 
    function(err){
        throw err;
    });

    /**
     *
     */
    this.goTo = function(url){
        $window.location.href = url;
    };
    
});