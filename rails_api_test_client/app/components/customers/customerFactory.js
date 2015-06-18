customersApp.factory('CustomerFactory', function($resource) {
	return $resource('http://railsapitestserver.localhost/customerapi/customers/:id', {id: '@id'}, {
		get: {
			method: 'GET',
			headers: {
				'Authorization': 'Token token=b7627f6e9087c69f'
			}
		},
		save: {
			method: 'POST',
			headers: {
				'Authorization': 'Token token=b7627f6e9087c69f'
			}
		},
		update: {
			method: 'PUT',
			headers: {
				'Authorization': 'Token token=b7627f6e9087c69f'
			}
		},
		delete: {
			method: 'DELETE',
			headers: {
				'Authorization': 'Token token=b7627f6e9087c69f'
			}
		}
	});
});
