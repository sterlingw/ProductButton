/**
 *
 */
app.controller('productCtrl', function($stateParams, Product, $window, growl, $state){
    var self = this;
    var id = $stateParams.id;

    Product.getProductById(id).then(function(product){
        self.product = product;
    }, function(errorMessage){
        growl.error(errorMessage);
        $state.go('home');
    });

    /**
     *
     */
    self.goTo = function(url){
        $window.location.href = url;
    };
    
});
