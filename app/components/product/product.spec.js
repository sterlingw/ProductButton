describe('productCtrl', function(){
    var $controller,
    Product,
    $q,
    $httpBackend,
    config,
    id = '123';
    beforeEach(function(){
        module('ProductButton');
    });
    beforeEach(inject(function(_$controller_, _Product_, _$q_, _$httpBackend_, _config_) {
        $controller = _$controller_;
        Product = _Product_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
        config = _config_;
    }));
    function createCtrl(deps) {
        var defaultDeps = {
            $stateParams: {id:id}
        };
        deps = (angular.isUndefined(deps)) ? defaultDeps : deps;
        return $controller('productCtrl', deps);
    }

    describe('when the controller runs', function() {
        it('calls Product.getProductById', function() {
            var defer = $q.defer();
            spyOn(Product, 'getProductById').and.returnValue(defer.promise);
            defer.resolve();

            createCtrl();

            expect(Product.getProductById).toHaveBeenCalledWith(id);
        });
        it('assigns a product to the controller', function() {
            $httpBackend.expectGET(config.API.POSTS + id, {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond({post:{comments:[]}});

            var ctrl = createCtrl();
            $httpBackend.flush();

            expect(ctrl.product).toBeDefined();
        });
    });
});