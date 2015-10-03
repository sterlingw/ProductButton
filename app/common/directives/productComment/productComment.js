/***
 *
 */
app.directive('productComment', function(){
    return {
        restrict: 'E',
        templateUrl: 'common/directives/productComment/productComment.html',
        scope: {
            comment: '=ngModel'
        },
        controller: function(){
            var self = this;


        },
        controllerAs: 'ctrl',
        bindToController: true
    }
});