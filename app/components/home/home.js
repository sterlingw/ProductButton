/***
 *
 */
app.controller('homeCtrl', function($http, $state, Product){

    /**
     *
     */
    this.productButtonClick = function(){
        Product.getRandomProductId().then(function(productId){
            $state.go('product', {
                id: productId
            });
        }, 
        function(err){
            throw err;
        });
    };

});
