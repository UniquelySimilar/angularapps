muApp.controller('SkillsController', ['$scope', function($scope) {
	console.log('SkillsController called');

	$scope.skills = [
		{id: 1, name: 'web development', price: 200},
		{id: 2, name: 'web design', price: 250},
		{id: 3, name: 'photography', price: 100},
		{id: 4, name: 'coffee drinking', price: 10}
	]
}]);