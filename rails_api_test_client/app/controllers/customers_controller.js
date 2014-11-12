customersApp.controller('CustomerIndexController', function($scope, Customer) {
	console.log("Hello from CustomerIndexController");

	$scope.customers = Customer.query(); //query() returns all the entries

})
.controller('CustomerShowController', function($scope, Customer) {
	console.log("Hello from CustomerShowController");

	$scope.message = "Hello from 'CustomerShowController'";
});