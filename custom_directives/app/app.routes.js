// Configure the routes
directiveApp.config( function($routeProvider) {
	$routeProvider
	.when('/about', {
		templateUrl : 'app/components/about/about.html',
		controller  : 'aboutController'
	})
	.when('/customer', {
		templateUrl : 'app/components/custom/customer/customer.html',
		controller  : 'customerController'
	})
	.when('/popover', {
		templateUrl : 'app/components/custom/popover/popover.html',
		controller  : 'popoverController'
	})
	.otherwise({
		redirectTo  : '/about'
	});
});
