/***
 *
 */
app.directive('productComment', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'common/directives/productComment/productComment.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            comment: '=ngModel'
        },
        controller: function($element, $compile, $scope){}
    }
});