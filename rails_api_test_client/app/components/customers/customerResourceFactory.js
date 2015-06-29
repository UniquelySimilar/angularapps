customersApp.factory('CustomerFactory', function($resource) {
//customersApp.factory('CustomerFactory', function($resource, authTokenService) {
//	var authToken = authTokenService.getAuthToken();
	//console.log('From customerResourceFactory: authToken = ' + authToken);
//	var authHeader = { 'Authorization': 'Token token=' + authToken };

	return {
		addAuthToken: function(authToken) {

			return $resource('http://railsapitestserver.localhost/customerapi/customers/:id', {id: '@id'}, {
				query: {
					method: 'GET',
					isArray: true,
					headers: { 'Authorization': 'Token token=' + authToken }
		//			headers: authHeader
				},
				get: {
					method: 'GET',
					headers: { 'Authorization': 'Token token=' + authToken }
					//headers: authHeader
				},
				save: {
					method: 'POST',
					headers: { 'Authorization': 'Token token=' + authToken }
					//headers: authHeader
				},
				update: {
					method: 'PUT',
					headers: { 'Authorization': 'Token token=' + authToken }
					//headers: authHeader
				},
				delete: {
					method: 'DELETE',
					headers: { 'Authorization': 'Token token=' + authToken }
					//headers: authHeader
				}
			});

		}
	}
});
