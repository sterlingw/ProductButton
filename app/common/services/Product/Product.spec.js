describe('Product', function(){
    var Product;
    beforeEach(module('ProductButton'));
    beforeEach(inject(function(_Product_){
        Product = _Product_;
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
});