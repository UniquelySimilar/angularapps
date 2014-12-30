// Configure the routes
customDirectiveApp.config( function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl : 'app/components/home/home.html',
		controller  : 'homeController'
	})
	.when('/about', {
		templateUrl : 'app/components/about/about.html',
		controller  : 'aboutController'
	})
	.otherwise({
		redirectTo  : '/home'
	});
});
