customersApp.factory('CustomerFactory', function($resource, authTokenService) {
	var authToken = authTokenService.getAuthToken();
	//console.log('From customerResourceFactory: authToken = ' + authToken);
	var authHeader = { 'Authorization': 'Token token=' + authToken };

	return $resource('http://railsapitestserver.localhost/customerapi/customers/:id', {id: '@id'}, {
		query: {
			method: 'GET',
			isArray: true,
			headers: authHeader
		},
		get: {
			method: 'GET',
			headers: authHeader
		},
		save: {
			method: 'POST',
			headers: authHeader
		},
		update: {
			method: 'PUT',
			headers: authHeader
		},
		delete: {
			method: 'DELETE',
			headers: authHeader
		}
	});
});
