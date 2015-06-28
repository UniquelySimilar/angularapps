customersApp.controller('LoginController', function($scope, $http, $location, authTokenService) {
	$scope.login = function() {
		console.log("login function called");
		$scope.login_error = false;
		$scope.login_error_text = "";

		$http.post('http://railsapitestserver.localhost/customerapi/login',
		 {email:'user1@example.com', password: '123qwe'})
		.success(function(data, status, headers, config) {
			authTokenService.setAuthToken(data.auth_token);
			console.log("New auth token: " + authTokenService.getAuthToken());
			$location.path('/index');
		})
		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			// TODO: Display error message
			console.log("Login function failed. Response status: " + status);
			authTokenService.setAuthToken('');
			$scope.login_error = true;

			if (status == '404') {
				$scope.login_error_text = "Invalid User/Password";
			}
			else {
				$scope.login_error_text = "Login Error - See Browser Console";
			}
			$location.path('/login');
		});
	}
});
