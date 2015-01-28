// Configure the routes
bootstrapJqPluginsTestApp.config( function($routeProvider) {
	$routeProvider
	.when('/tabs', {
		templateUrl : 'app/components/tabs/tabs.html',
		controller  : 'tabsController'
	})
	.when('/accordian', {
		templateUrl : 'app/components/accordian/accordian.html',
		controller  : 'accordianController'
	})
	.otherwise({
		redirectTo  : '/tabs'
	});
});
