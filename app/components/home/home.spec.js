describe('homeCtrl', function(){
    var $controller,
    Product,
    $q;
    beforeEach(function(){
        module('ProductButton');
    });
    beforeEach(inject(function(_$controller_, _Product_, _$q_) {
        $controller = _$controller_;
        Product = _Product_;
        $q = _$q_;
    }));
    function createCtrl(deps) {
        var defaultDeps = {
            Product: Product
        };
        deps = (angular.isUndefined(deps)) ? defaultDeps : deps;
        return $controller('homeCtrl', deps);
    }

    describe('#productButtonClick', function() {
        beforeEach(function(){
            var defer = $q.defer();
            spyOn(Product, 'getRandomProductId').and.returnValue(defer.promise);
            defer.resolve();
        });
        it('calls Product.getRandomProductId', function() {
            createCtrl().productButtonClick();
            expect(Product.getRandomProductId).toHaveBeenCalled();
        });
    });
});