describe('Product', function(){
    var Product,
    $q,
    $httpBackend,
    config,
    apiResponsePosts,
    apiResponsePost;
    beforeEach(module('ProductButton'));
    beforeEach(inject(function(_Product_, _$q_, _$httpBackend_, _config_, _apiResponsePost_, _apiResponsePosts_){
        Product = _Product_;
        $q = _$q_;
        config = _config_;
        $httpBackend = _$httpBackend_;
        apiResponsePost = _apiResponsePost_;
        apiResponsePosts = _apiResponsePosts_;
    }));

    describe('constructor', function(){
        var product;
        beforeEach(function(){
            product = new Product({
                voteCount: 300,
                name: 'Product Button',
                tagline: 'Push for a random product',
                datePosted: new Date(),
                productHuntUrl: 'https://www.producthunt.com/tech/product-button',
                comments: [],
                commentCount: 0
            });
        });
        it('should define property voteCount', function(){
            expect(product.voteCount).toBeDefined();

        });
        it('should define property name', function(){
            expect(product.name).toBeDefined();
            
        });
        it('should define property tagline', function(){
            expect(product.tagline).toBeDefined();
            
        });
        it('should define property datePosted', function(){
            expect(product.datePosted).toBeDefined();
            
        });
        it('should define property productHuntUrl', function(){
            expect(product.productHuntUrl).toBeDefined();
            
        });
        it('should define property comments', function(){
            expect(product.comments).toBeDefined();
            
        });
        it('should define property commentCount', function(){
            expect(product.commentCount).toBeDefined();
            
        });
    });
    xdescribe('.getProducts', function(){
        beforeEach(function(){
            $httpBackend.expectGET(config.API.POSTS, {
                'Authorization': 'Bearer ' + config.API.TOKEN,
                'Accept': 'application/json, text/plain, */*'
            }).respond(apiResponsePosts.build());
        });
        it('resolves the promise', function(){
            Product.getProducts().then(function(res){
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
            }).respond(apiResponsePosts.build());
        });
        xit('calls Product.getProducts', function() {
            var defer = $q.defer();
            spyOn(Product, 'getProducts').and.returnValue(defer.promise);
            defer.resolve();

            Product.getRandomProductId();

            expect(Product.getProducts).toHaveBeenCalled();
        });
        it('resolves with a number', function() {
            Product.getRandomProductId().then(function(productId){
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
            }).respond(apiResponsePost.build());
        });
        it('resolves the promise', function(){
            Product.getProductById(123).then(function(product){
                expect(product).toBeDefined();
            });

            $httpBackend.flush();
        });
        it('resolves with an instance of Product', function() {
            Product.getProductById(123).then(function(product){
                expect(product instanceof Product).toBeTruthy();
            });

            $httpBackend.flush();
        });
        xdescribe('property comments', function() {
            it('is an array ProductComment instances', function() {
                 Product.getProductById(123).then(function(product){
                    expect(product.comments[0] instanceof ProductComment).toBeTruthy();
                    expect(product.comments[1] instanceof ProductComment).toBeTruthy();
                    expect(product.comments[2] instanceof ProductComment).toBeTruthy();
                });

                $httpBackend.flush();
             }); 
        });
    });
});
