customersApp.factory('authTokenService', function($window) {
	var authTokenService = {};
	var auth_token = "";

	// Use 'sessionStorage' to persist token in client
	authTokenService.getAuthToken = function() {
		var auth_token = $window.sessionStorage.auth_token;
		console.log("'getAuthToken()' called. 'auth_token' = " + auth_token);
		return auth_token;
	};
	
	authTokenService.setAuthToken = function(value) {
		$window.sessionStorage.auth_token = value;
		console.log("'setAuthToken()' called. sessionStorage.auth_token set to new value: " + value);
	};

	return authTokenService;
});
