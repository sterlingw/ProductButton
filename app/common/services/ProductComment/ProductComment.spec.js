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
                id: 123,
                body: 'Hello',
                childComments: [],
                postedAt: new Date(),
                upvotes: 2,
                postedBy: 'Sterling Whitley',
                parentCommentId: 321
            });
        });
        it('defines property id', function(){
            expect(comment.id).toBeDefined();
        });
        it('defines property body', function(){
            expect(comment.body).toBeDefined();
        });
        it('defines property childComments', function(){
            expect(comment.childComments).toBeDefined();
        });
        it('defines property postedAt', function(){
            expect(comment.postedAt).toBeDefined();
        });
        it('defines property upvotes', function(){
            expect(comment.upvotes).toBeDefined();
        });
        it('defines property postedBy', function(){
            expect(comment.postedBy).toBeDefined();
        });
        it('defines property parentCommentId', function() {
            expect(comment.parentCommentId).toBeDefined();
        });
    });
});