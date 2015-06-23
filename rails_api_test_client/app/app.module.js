var customersApp = angular.module("railsApiTestClient", ['ngRoute', 'ngResource']);

customersApp.controller('AppController', function($scope, authTokenService) {
	$scope.auth_token = authTokenService.getAuthToken;
});

// Configure the routes
customersApp.config( function($routeProvider) {
	$routeProvider

	// Route for the 'login' page
	.when('/login', {
		templateUrl : 'app/components/login/loginView.html',
		controller  : 'LoginController'
	})
	// Route for the 'index' page
	.when('/index', {
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
	})
	// Default
	.otherwise({
		redirectTo: '/login'
	});

});
