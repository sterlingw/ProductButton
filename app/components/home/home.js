/***
 *
 */
app.controller('homeCtrl', function($http, $state, api){


    /**
     *
     */
    this.productButtonClick = function(){
        api.getProducts().then(function(res){
            var postId = res.data.posts[0].id;

            $state.go('product', {
                id: postId
            });
        }, 
        function(err){
            throw err;
        });
    };
    

});