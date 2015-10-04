describe('childComment', function() {
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

        element = $compile(angular.element('<child-comment ng-model="comment"></child-comment>'))(scope);
    }));

    describe('init', function() {
        it('assigns property comment', function(){
            expect(element.scope().comment).toBeDefined();
        });
    });
});