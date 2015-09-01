customersApp.controller('LoginController', function($scope, $http, $location, $window, authTokenService) {
	$scope.email = '';
	$scope.password = '';
	
	$scope.login = function() {
		console.log("login function called");
		$scope.login_error = false;
		$scope.login_error_text = '';

		$http.post('http://railsapitestserver.localhost/customerapi/login',
		 {email: $scope.email, password: $scope.password})
		.success(function(data, status, headers, config) {
			authTokenService.setAuthToken(data.auth_token);
			console.log("New auth token: " + authTokenService.getAuthToken());
			$location.path('/index');
		})
		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			console.log("Login function failed. Response status: " + status);
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

	$scope.logout = function() {
		console.log("Logout function called.");

		$http.get('http://railsapitestserver.localhost/customerapi/logout')
		.success(function(data, status, headers, config) {
			console.log("logout succeeded");
			authTokenService.setAuthToken('');
			$location.path('/login');
			// Restart Angular so that a new 'CustomerFactory' resource will be created with the new authorization token
			$window.location.reload();
		})
		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
});
