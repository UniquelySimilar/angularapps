var customersApp = angular.module("railsApiTestClient", ['ngRoute']);

// configure the routes
customersApp.config( function($routeProvider) {
	$routeProvider

	// route for the 'home' page
//	.when('/', {
//		templateUrl : 'pages/home.html',
//		controller  : 'mainController'
//	})

	// route for the 'contact' page
	.when('/', {
		templateUrl : 'app/components/customers/customersView.html',
		controller  : 'customersController'
	});
});

