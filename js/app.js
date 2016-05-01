angular.module('app', ['appControllers','appServices','ngMaterial','ngRoute'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state("login", {
      url:"/",
      controller: "LoginController",
      templateUrl: "views/login.html"
      })
      
      .state("application", {
      url:"/app",
      controller: "MainController",
      templateUrl: "views/application.html",
      params: {'test': null}
  })
});


