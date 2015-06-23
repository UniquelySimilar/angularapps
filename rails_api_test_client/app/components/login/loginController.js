customersApp.controller('LoginController', function($scope, $http, $location, authTokenService) {
	$scope.login = function() {
		console.log("login function called");

		$http.post('http://railsapitestserver.localhost/customerapi/login')
		.success(function(data, status, headers, config) {
			authTokenService.setAuthToken(data.auth_token);
			$scope.$parent.auth_token = authTokenService.getAuthToken();
			$location.path('/index');
		})
		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
});
