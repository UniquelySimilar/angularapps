customersApp.controller('NavbarController', function($scope, authTokenService) {
	$scope.isAuth = function() {
		return authTokenService.isSet();
	}
})