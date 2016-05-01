angular.module('appControllers',[])


.controller("LoginController", function($scope, $http, $state){
    
    //Variables
    $scope.signUpInfo = {
        username: undefined,
        password: undefined
    }
    
    $scope.loginInfo = {
        username: undefined,
        password: undefined
    }
    
    var result = {
        test: undefined
    }
    
    result.test = {
        test: "test",
        test2: "test2",
        test3: "testers"
    }
    
    result.test = JSON.stringify(result.test);
    
    //Functions
    
    $scope.signUserUp = function (){
        var data = {
            username: $scope.signUpInfo.username,
            password: $scope.signUpInfo.password
        }
        
        $http.post("endpoints/signup.php", data).success(function(response){
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            $state.go("application");
        }).error(function(error){
            console.error(error);
        });
    };
    
    $scope.loginUser = function () {
         var data = {
            username: $scope.loginInfo.username,
            password: $scope.loginInfo.password
        }
        
        $http.post("endpoints/login.php", data).success(function(response){
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            $state.go("application", result);
        }).error(function(error){
            console.error(error);
        });
    
    }
    
    //Init

})

.controller("MainController", function ($scope, $state, $http, AuthenticationService){
    //If user is not logged in
	var token;
	if (localStorage['token']){
    token = JSON.parse(localStorage['token']);
	} else {
	token = "something stupid";
	}
	AuthenticationService.checkToken(token);
	
	$scope.logout = function(){
		var data = {
			token: token
		}
		
		$http.post('endpoints/logout.php', data).success(function(response){
			console.log(response)
			localStorage.clear();
			$state.go("login");
		}).error(function(error){
			console.error(error);
		})
	}
	
    
})