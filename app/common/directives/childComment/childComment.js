/***
 *
 */
app.directive('childComment', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'common/directives/childComment/childComment.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            comment: '=ngModel'
        },
        controller: function($element, $compile, $scope){
            var self = this;
            var scope = $scope.$new(true);
            var elementHtml = '<product-comment ng-repeat="comment in ctrl.product.child_comments" ng-model="comment"></product-comment>';

            // Create scope variable for $compile since controllerAs syntax is in use
            scope.ctrl = {
                comment: self.comment
            };

            if (angular.isArray(self.comment.child_comments) && self.comment.child_comments.length) {
                $compile(elementHtml)(scope, function(cloned){
                    $element.find('.product-comment-container--children')
                    .append(cloned);
                });
            }
            
        }
    }
});