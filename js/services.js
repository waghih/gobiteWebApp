angular.module('appServices', [])

.service('AuthenticationService',function($http, $state){

	var baseUrl = 'api/';
	return{
		checkToken: function(token){
			var data = {token: token};
			console.log(data);
			return $http.post(baseUrl+"checkToken.php", data).then(function(response){
				return response.data;
			});		
		}
	}
});
