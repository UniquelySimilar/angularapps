customersApp.factory('authTokenService', function($window) {
	var authTokenService = {};
	var auth_token = "";

	// Use 'sessionStorage' to persist token in client
	authTokenService.getAuthToken = function() { return $window.sessionStorage.auth_token;	};
	authTokenService.setAuthToken = function(value) { $window.sessionStorage.auth_token = value;	};

	return authTokenService;
});
