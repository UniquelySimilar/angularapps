uiBootstrapDirectivesApp.controller('accordianController', ['$scope', function($scope) {
	$scope.oneAtATime = true;

	$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};

}]);