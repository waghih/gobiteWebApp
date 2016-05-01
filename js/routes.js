angular.module('appRoutes', [])

// .config(function($stateProvider, $urlRouterProvider) {
// 	$stateProvider
// 	.state('login',{
// 		url:'/login',
// 		templateUrl: 'templates/login.html',
// 	})
// })

.config(['$routerProvider',function($routeProvider) {
	$routeProvider.
		when('/login',{
			templateUrl: 'templates/login.html',
			controller: 'LoginCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		})
}])