customersApp.controller("customersController", function customersController($scope,$http) {
	var site = "http://angularapps.localhost";
	var page = "/w3schools_tutorial/app/components/customers/php/customers_mysql.php";
//			var page = "/w3schools_tutorial/app/components/customers/customers.json";

	$http.get(site + page)
	.success(function(response) {
		$scope.customers = response;
//				console.log(response);
	});

});
