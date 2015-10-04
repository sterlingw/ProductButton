describe('productComment', function() {
    var element,
    $compile;
    beforeEach(function(){
        module('ProductButton');
    });
    beforeEach(inject(function(_$compile_){
        $compile = _$compile_;

        var scope = {
            comment: {

            }
        };

        element = $compile(angular.element('<product-comment ng-model="comment"></product-comment>'))(scope);
    }));

    describe('init', function() {
        it('assigns property comment', function(){
            expect(element.scope().comment).toBeDefined();
        });
    });
});