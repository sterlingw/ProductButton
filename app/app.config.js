/***
 * 
 */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'growlProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, growlProvider){
            $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'components/home/home.html',
                controller: "homeCtrl as homeCtrl"
            })
            .state('product', {
                url: "/product/:id",
                templateUrl: 'components/product/product.html',
                controller: "productCtrl as productCtrl"
            })
        ;

        $urlRouterProvider.otherwise('/');

        growlProvider.globalTimeToLive(5000);
}]);

/**
 *
 */
app.run(function($rootScope){
    
});