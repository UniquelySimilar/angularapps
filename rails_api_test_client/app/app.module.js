var customersApp = angular.module("railsApiTestClient", ['ngRoute', 'ngResource']);

// Configure the routes
customersApp.config( function($routeProvider) {
	$routeProvider

	// Route for the 'index' page
	.when('/', {
		templateUrl : 'app/views/customers/customer_index.html',
		controller  : 'CustomerIndexController'
	})

	// Route for the 'show' page
	.when('/:id', {
		templateUrl : 'app/views/customers/customer_show.html',
		controller  : 'CustomerShowController'
	});
});

// Factories
customersApp.factory('Customer', function($resource) {
	return $resource('http://railsapitest.localhost/api/customers/:id', {
		update: {
			method: 'PUT' // this method issues a PUT request
		}
	});
});
