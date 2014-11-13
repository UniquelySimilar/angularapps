customersApp.controller('CustomerIndexController', function($scope, Customer) {
	$scope.customers = Customer.query();
})
.controller('CustomerShowController', function($scope, $routeParams, Customer) {
	$scope.customer = Customer.get({id: $routeParams.id});
})
.controller('CustomerNewController', function($scope, Customer) {
	$scope.customer = new Customer();
})
.controller('CustomerCreateController', function($scope, Customer) {
	console.log("Hello from CustomerCreateController");

	$scope.message = "Hello from 'CustomerCreateController'";
})
.controller('CustomerUpdateController', function($scope, Customer) {
	console.log("Hello from CustomerUpdateController");

	$scope.message = "Hello from 'CustomerUpdateController'";
})
.controller('CustomerDestroyController', function($scope, Customer) {
	console.log("Hello from CustomerDestroyController");

	$scope.message = "Hello from 'CustomerDestroyController'";
});