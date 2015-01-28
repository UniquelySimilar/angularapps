// Configure the routes
bootstrapJqPluginsTestApp.config( function($routeProvider) {
	$routeProvider
	.when('/tabs', {
		templateUrl : 'app/components/tabs/tabs.html',
		controller  : 'tabsController'
	})
	.otherwise({
		redirectTo  : '/tabs'
	});
});
