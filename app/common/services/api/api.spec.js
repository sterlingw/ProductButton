describe('api', function(){
    var api,
    $httpBackend,
    config,
    $q;
    beforeEach(module('ProductButton'));
    beforeEach(inject(function(_api_, _$httpBackend_, _config_, _$q_){
        api = _api_;
        $httpBackend = _$httpBackend_;
        config = _config_;
        $q = _$q_;
    }));

    describe('.getProducts', function(){
        beforeEach(function(){
            $httpBackend.expectGET(config.API.POSTS, {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond({posts:[{id: 123}]});
        });
        it('resolves the promise', function(){
            api.getProducts().then(function(res){
                expect(res).toBeDefined();
            });

            $httpBackend.flush();
        });
    });
    describe('.getRandomProductId', function() {
        beforeEach(function(){
            $httpBackend.expectGET(config.API.POSTS, {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond({posts:[{id: 123}]});
        });
        it('calls api.getProducts', function() {
            var defer = $q.defer();
            spyOn(api, 'getProducts').and.returnValue(defer.promise);
            defer.resolve();

            api.getRandomProductId();

            expect(api.getProducts).toHaveBeenCalled();
        });
        it('resolves with a number', function() {
            api.getRandomProductId().then(function(productId){
                expect(typeof productId).toBe('number');
            });

            $httpBackend.flush();
        });
    });
    describe('.getProductById', function(){
        beforeEach(function(){
            $httpBackend.expectGET(config.API.POSTS + '123', {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond({post:{id:123}});
        });
        it('resolves the promise', function(){
            api.getProductById(123).then(function(productId){
                expect(productId).toBeDefined();
            });

            $httpBackend.flush();
        });
    });
});