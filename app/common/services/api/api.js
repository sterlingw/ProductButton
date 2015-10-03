/***
 *
 */
app.factory('api', function($http, $q, config){
    var api = {};

    /**
     * @private
     */
    api._getRandomProductId = function(products){
        return products[0].id
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
            defer.resolve(api._getRandomProductId(res.data.posts));
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
            defer.resolve(res.data.post);
        }, 
        function(err){
            defer.reject(err);
        });

        return defer.promise;
    };

    return api;
});