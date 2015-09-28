/***
 * 
 */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
            $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'components/home/home.html',
                controller: "homeCtrl"
            })
            .state('product', {
                url: "/product",
                templateUrl: 'components/product/product.html',
                controller: "productCtrl"
            })
        ;

        $urlRouterProvider.otherwise('/');
}]);

/**
 *
 */
app.run(function($rootScope){
    
});