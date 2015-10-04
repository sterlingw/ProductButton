/**
 *
 */
app.controller('productCtrl', function($stateParams, api, Product, ProductComment, $window){
    var self = this;
    var id = $stateParams.id;

    api.getProductById(id).then(function(product){
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