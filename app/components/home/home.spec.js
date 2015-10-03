describe('homeCtrl', function(){
    var $controller,
    api,
    $q;
    beforeEach(function(){
        module('ProductButton');
    });
    beforeEach(inject(function(_$controller_, _api_, _$q_) {
        $controller = _$controller_;
        api = _api_;
        $q = _$q_;
    }));
    function createCtrl(deps) {
        var defaultDeps = {
            api: api
        };
        deps = (angular.isUndefined(deps)) ? defaultDeps : deps;
        return $controller('homeCtrl', deps);
    }

    describe('#productButtonClick', function() {
        beforeEach(function(){
            var defer = $q.defer();
            spyOn(api, 'getRandomProductId').and.returnValue(defer.promise);
            defer.resolve();
        });
        it('calls api.getRandomProductId', function() {
            createCtrl().productButtonClick();
            expect(api.getRandomProductId).toHaveBeenCalled();
        });
    });
});