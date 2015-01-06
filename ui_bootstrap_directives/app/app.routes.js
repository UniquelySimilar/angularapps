// Configure the routes
uiBootstrapDirectivesApp.config( function($routeProvider) {
	$routeProvider
	.when('/about', {
		templateUrl : 'app/components/about/about.html',
		controller  : 'aboutController'
	})
	.when('/accordian', {
		templateUrl : 'app/components/accordian/accordian.html',
		controller  : 'accordianController'
	})
	.when('/tabs', {
		templateUrl : 'app/components/tabs/tabs.html',
		controller  : 'tabsController'
	})
	.otherwise({
		redirectTo  : '/about'
	});
});
