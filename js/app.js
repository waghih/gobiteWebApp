angular.module('app', ['appControllers','appServices','ngMaterial','ngRoute','ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state("login", {
        url:"/",
        controller: "LoginCtrl",
        templateUrl: "templates/login.html"
      })
      
      .state("application", {
        url:"/app",
        controller: "DashboardCtrl",
        templateUrl: "templates/dashboard.html",
        params: {'test': null}
      })
});


