angular.module('appControllers',[])

.run(function($rootScope){

    $rootScope.users=[];
    $rootScope.isLoggedIn=false;
    

})


.controller("LoginCtrl", function($scope, $http, $state, $rootScope){
    var baseUrl = 'api/';
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
        
        $http.post(baseUrl+"signup.php", data,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
            }
        }).success(function(response){
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            $state.go("application");
        }).error(function(error){
            console.error(error);
        });
    };
    
    $scope.loginUser = function () {
        var usertoken = Math.random();
        var data = {
            username: $scope.loginInfo.username,
            password: $scope.loginInfo.password,
            token: usertoken
        }
        
        $http.post(baseUrl+"login.php", data).success(function(response){
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response));
            if(response === "ERROR"){
                $state.go("login")
            }else{
                $rootScope.isLoggedIn = true;
                $state.go("application", result);
            }
            
        }).error(function(error){
            console.error(error);
        });
    
    }
    
    //Init

})

.controller("DashboardCtrl", function($scope, $state, $http, AuthenticationService, $rootScope){
    //If user is not logged in
    var baseUrl = 'api/';
    var auth = ''
	var token;
	if (localStorage['token']){
    token = JSON.parse(localStorage['token']);
	} else {
	token = "something stupid";
	}
    console.log(token);
	AuthenticationService.checkToken(token).then(function(response){
        auth = response;
        console.log(auth);
        if(auth === "unauthorized"){
            $rootScope.isLoggedIn = false;
        }
        else{
            $rootScope.isLoggedIn = true;
        }
    });
    // console.log(AuthenticationService.checkToken(token))
    // console.log(auth);
	console.log($rootScope.isLoggedIn)
    console.log('babi')
    if(!$rootScope.isLoggedIn){
        $state.go("login")
    }

	$scope.logout = function(){
		var data = {
			token: token
		}
		
		$http.post(baseUrl+'logout.php', data).success(function(response){
			console.log(response)
			localStorage.clear();
			$state.go("login");
		}).error(function(error){
			console.error(error);
		})
	}
	
    
})