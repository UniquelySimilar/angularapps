var customersApp = angular.module("railsApiTestClient", ['ngRoute', 'ngResource']);

// Configure the routes
customersApp.config( function($routeProvider) {
	$routeProvider

	// Route for the 'index' page
	.when('/', {
		templateUrl : 'app/components/customers/customer_index.html',
		controller  : 'CustomerIndexController'
	});
});

// Factories
customersApp.factory('Customer', function($resource) {
	return $resource('http://railsapitest.localhost/api/customers/:id', { id: '@_id' }, {
		update: {
			method: 'PUT' // this method issues a PUT request
		}
	});
});
