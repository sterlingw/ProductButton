/***
 *
 */
app.controller('homeCtrl', function($http, $state, api){


    /**
     *
     */
    this.productButtonClick = function(){
        api.getRandomProductId().then(function(productId){
            $state.go('product', {
                id: productId
            });
        }, 
        function(err){
            throw err;
        });
    };
    

});