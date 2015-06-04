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
	.when('/weather', {
		templateUrl : 'app/components/custom/weather/weatherView.html',
		controller  : 'weatherController'
	})
/* TODO: Finish
	.when('/collapse', {
		templateUrl : 'app/components/custom/collapse/collapse.html',
		controller  : 'collapseController'
	})
*/
	.when('/images', {
		templateUrl : 'app/components/custom/images/images.html',
		controller  : 'imagesController'
	})
	.otherwise({
		redirectTo  : '/about'
	});
});
