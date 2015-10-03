describe('productCtrl', function(){
    var $controller,
    api,
    $q,
    $httpBackend,
    config,
    id = '123';
    beforeEach(function(){
        module('ProductButton');
    });
    beforeEach(inject(function(_$controller_, _api_, _$q_, _$httpBackend_, _config_) {
        $controller = _$controller_;
        api = _api_;
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
        it('calls api.getProductById', function() {
            var defer = $q.defer();
            spyOn(api, 'getProductById').and.returnValue(defer.promise);
            defer.resolve();

            createCtrl();

            expect(api.getProductById).toHaveBeenCalledWith(id);
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