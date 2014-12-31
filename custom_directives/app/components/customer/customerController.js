customDirectiveApp.controller('customerController', ['$scope', function($scope) {
	$scope.message = "Content injected from the 'custom' page";
  $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
  $scope.igor = { name: 'Igor', address: '123 Somewhere' };
}]);
