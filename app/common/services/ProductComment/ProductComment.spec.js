describe('ProductComment', function(){
    var ProductComment;
    beforeEach(module('ProductButton'));
    beforeEach(inject(function(_ProductComment_){
        ProductComment = _ProductComment_;
    }));

    describe('constructor', function(){
        var comment;
        beforeEach(function(){
            comment = new ProductComment({
                body: 'Hello',
                childComments: [],
                postedAt: new Date(),
                upvotes: 2,
                postedBy: 'Sterling Whitley'
            });
        });
        it('should define property body', function(){
            expect(comment.body).toBeDefined();
        });
        it('should define property childComments', function(){
            expect(comment.childComments).toBeDefined();
        });
        it('should define property postedAt', function(){
            expect(comment.postedAt).toBeDefined();
        });
        it('should define property upvotes', function(){
            expect(comment.upvotes).toBeDefined();
        });
        it('should define property postedBy', function(){
            expect(comment.postedBy).toBeDefined();
        });
    });
});