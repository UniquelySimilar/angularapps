muApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/skills', {
			templateUrl : 'app/components/skills/skillsView.html',
			controller  : 'SkillsController'
		})
		.otherwise({
			redirectTo: '/skills'
		});
}]);