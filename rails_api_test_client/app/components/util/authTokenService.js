customersApp.factory('authTokenService', function() {
	var authTokenService = {};
	var auth_token = "";

	authTokenService.getAuthToken = function() { return auth_token;	};
	authTokenService.setAuthToken = function(value) { auth_token = value;	};

	return authTokenService;
});
