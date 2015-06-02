var customersApp = angular.module("railsApiTestClient", ['ngRoute', 'ngResource']);

// Configure the routes
customersApp.config( function($routeProvider) {
	$routeProvider

	// Route for the 'index' page
	.when('/', {
		templateUrl : 'app/components/customers/customerIndexView.html',
		controller  : 'CustomerIndexController'
	})
	// Route for the 'new' page
	.when('/new', {
		templateUrl : 'app/components/customers/customerNewView.html',
		controller  : 'CustomerNewController'
	})
	// Route for the 'show' page
	.when('/:id', {
		templateUrl : 'app/components/customers/customerShowView.html',
		controller  : 'CustomerShowController'
	})
	// Route for the 'new' page
	.when('/edit/:id', {
		templateUrl : 'app/components/customers/customerEditView.html',
		controller  : 'CustomerEditController'
	});

});

// Factories
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
