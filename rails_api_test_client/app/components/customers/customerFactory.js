customersApp.factory('CustomerFactory', function($resource) {
	var authToken = 'b7627f6e9087c69f';
	var authHeader = { 'Authorization': 'Token token=' + authToken };

	return $resource('http://railsapitestserver.localhost/customerapi/customers/:id', {id: '@id'}, {
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
