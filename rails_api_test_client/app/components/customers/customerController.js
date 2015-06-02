customersApp.controller('CustomerIndexController', function($scope, CustomerFactory, $location) {
	$scope.customers = CustomerFactory.query();

	$scope.predicate = 'name';

	$scope.name_hover = false;
	$scope.street_hover = false;
	$scope.city_hover = false;
	$scope.state_hover = false;
	$scope.zipcode_hover = false;

	$scope.deleteCustomer = function(customer_id) {
		if (!confirm("Delete this customer?")) {
			return;
		}
		
		CustomerFactory.delete( {id: customer_id},
			// Success
			function(){
				$scope.customers = CustomerFactory.query();
				//console.log("deleteCustomer() success callback");
			});
	}
})

.controller('CustomerShowController', function($scope, $routeParams, CustomerFactory) {
	$scope.customer = CustomerFactory.get({id: $routeParams.id});
})

.controller('CustomerNewController', function($scope, $location, CustomerFactory, stateOptions) {
	$scope.customer = new CustomerFactory();
	// Set default state value
	$scope.customer.state = 'Colorado';
	$scope.customer.home_phone = '303-555-1212';
	$scope.customer.work_phone = '303-555-1212';
	$scope.resp_data = {};

	$scope.stateOpts = stateOptions;

	$scope.createCustomer = function() {
		// resource object
		CustomerFactory.save($scope.customer,
			// Success
			function(value, headers){
				//console.log(value);
				$location.path('/');
			},
			// Error
			function(response){
				//console.log('Save error callback called');
				$scope.resp_data = response.data;
			});
	}
})

.controller('CustomerEditController', function($scope, $routeParams, $location, CustomerFactory, stateOptions) {
	$scope.customer = CustomerFactory.get({id: $routeParams.id});
	$scope.stateOpts = stateOptions;

	$scope.updateCustomer = function() {
		// resource object
		CustomerFactory.update($scope.customer,
			// Success
			function(value, headers){
				//console.log(value);
				$location.path('/' + $scope.customer.id);
			},
			// Error
			function(response){
				//console.log('Save error callback called');
				$scope.resp_data = response.data;
			});
	}
})
