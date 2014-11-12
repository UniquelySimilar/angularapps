customersApp.controller('CustomerIndexController', function($scope, Customer) {

	$scope.customers = Customer.query(); //query() returns all the entries

})
.controller('CustomerShowController', function($scope, Customer) {

	$scope.customers = Customer.query(); //query() returns all the entries

});