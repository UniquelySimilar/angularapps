customersApp.factory('CustomerFactory', function($resource) {
	return $resource('http://railsapitestserver.localhost/customerapi/customers/:id', {id: '@id'}, {
		update: {
			method: 'PUT' // this method issues a PUT request
		},
		delete: {
			method: 'DELETE' // this method issues a DELETE request
		}
	});
});
