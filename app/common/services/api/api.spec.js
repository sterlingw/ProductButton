describe('api', function(){
    var api,
    $httpBackend,
    config;
    beforeEach(module('ProductButton'));
    beforeEach(inject(function(_api_, _$httpBackend_, _config_){
        api = _api_;
        $httpBackend = _$httpBackend_;
        config = _config_;
    }));

    describe('.getProducts', function(){
        beforeEach(function(){
            $httpBackend.expectGET(config.API.POSTS, {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond({});
        });
        it('should resolve the promise', function(){
            api.getProducts().then(function(res){
                expect(res).toBeDefined();
            });

            $httpBackend.flush();
        });
    });
    describe('.getProductById', function(){
        beforeEach(function(){
            $httpBackend.expectGET(config.API.POSTS + '123', {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond({});
        });
        it('should resolve the promise', function(){
            api.getProductById(123).then(function(res){
                expect(res).toBeDefined();
            });

            $httpBackend.flush();
        });
    });
});