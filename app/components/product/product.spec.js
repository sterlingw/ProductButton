describe('productCtrl', function(){
    var $controller,
    Product,
    $q,
    $httpBackend,
    config,
    id = '123',
    growl,
    $state;
    beforeEach(function(){
        module('ProductButton');
    });
    beforeEach(inject(function(_$controller_, _Product_, _$q_, _$httpBackend_, _config_, _growl_, _$state_) {
        $controller = _$controller_;
        Product = _Product_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
        config = _config_;
        growl = _growl_;
        $state = _$state_;
    }));
    function createCtrl(deps) {
        var defaultDeps = {
            $stateParams: {id:id},
            growl: growl,
            $state: $state
        };
        deps = (angular.isUndefined(deps)) ? defaultDeps : deps;
        return $controller('productCtrl', deps);
    }

    describe('init', function() {
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
    describe('when getProductById rejects the promise', function() {
        beforeEach(function(){
            $httpBackend.expectGET(config.API.POSTS + id, {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond(404, {});
        });
        it('calls growl.error', function(){
            spyOn(growl, 'error');
            spyOn(Product, 'getProductById').and.callThrough();

            createCtrl();
            $httpBackend.flush();

            expect(growl.error).toHaveBeenCalled();
        });
        it('calls $state.go', function() {
            spyOn($state, 'go');
            spyOn(Product, 'getProductById').and.callThrough();

            createCtrl();
            $httpBackend.flush();

            expect($state.go).toHaveBeenCalledWith('home');
        });
    });
});
