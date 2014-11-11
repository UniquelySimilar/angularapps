customersApp.controller("customersController", function customersController($scope, $http) {
	var site = "http://railsapitest.localhost";
	var page = "/api/customers";

	$http.get(site + page)
	.success(function(response) {
		$scope.customers = response;
//		console.log(response);
	});

});
