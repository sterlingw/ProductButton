/**
 *
 */
app.controller('productCtrl', function($stateParams, Product, $window){
    var self = this;
    var id = $stateParams.id;

    Product.getProductById(id).then(function(product){
        self.product = product;
    }, function(err){
        throw err;
    });

    /**
     *
     */
    self.goTo = function(url){
        $window.location.href = url;
    };
    
});
