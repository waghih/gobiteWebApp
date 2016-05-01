angular.module('app', ['appControllers','appServices','ngMaterial','ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "LoginCtrl",
      templateUrl: "templates/login.html"
    })
    .when('dashboard',{
    	controller: "Dashboard",
    	templateUrl: "templates/dashboard.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});


