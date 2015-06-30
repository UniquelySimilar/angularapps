customersApp.controller('CustomerIndexController', function($scope, CustomerFactory, $location, authTokenService) {
	$scope.customers = CustomerFactory.query(
		// Success
		function(data) {},
		// Error
		function(response) {
			if (response.status == '401') {
				//console.log("CustomerFactory.query() error response");
				$location.path('/login');
			}
			else {
				console.log("CustomerFactory.query() error response");
				console.log(response);
			}
		}
	);

	// 'predicate' used in column sorting implementation
	$scope.predicate = 'name';

	$scope.name_hover = false;
	$scope.street_hover = false;
	$scope.city_hover = false;
	$scope.state_hover = false;
	$scope.zipcode_hover = false;

	$scope.auth_error = false;

	$scope.deleteCustomer = function(customer_id) {
		if (!confirm("Delete this customer?")) {
			return;
		}
		
		CustomerFactory.delete( {id: customer_id},
			// Success
			function(){
				$scope.customers = CustomerFactory.query();
				//console.log("deleteCustomer() success callback");
			},
			// Error
			function(response){
				if (response.status == '401') {
					$scope.auth_error = true;
				}
				else {
					console.log("CustomerFactory.delete() error response");
					console.log(response);
				}
			});
	}
})

.controller('CustomerShowController', function($scope, $routeParams, CustomerFactory, authTokenService) {
	$scope.auth_error = false;
	$scope.customer = CustomerFactory.get({id: $routeParams.id},
		// Success
		function(data) {},
		// Error
		function(response) {
			if (response.status == '401') {
				$scope.auth_error = true;
			}
			else {
				console.log("CustomerFactory.get() error response");
				console.log(response);
			}
		});
})

.controller('CustomerNewController', function($scope, $location, CustomerFactory, stateOptions, authTokenService) {
	$scope.customer = new CustomerFactory();

	// TODO: This isn't working.  Re-evaluate using interceptors (see bookmark).
	//$scope.customer = CustomerFactory.addAuthToken();

	console.log("New CustomerFactory object");
	console.log($scope.customer);

	// Set default state value
	$scope.customer.state = 'Colorado';
	$scope.customer.home_phone = '303-555-1212';
	$scope.customer.work_phone = '303-555-1212';
	$scope.resp_data = {};

	$scope.auth_error = false;

	$scope.stateOpts = stateOptions;

	$scope.createCustomer = function() {
		// resource object
		CustomerFactory.save($scope.customer,
			// Success
			function(value, headers){
				//console.log(value);
				$location.path('/index');
			},
			// Error
			function(response){
				if (response.status == '401') {
					$scope.auth_error = true;
				}
				else {
					$scope.resp_data = response.data;
				}
			});
	}
})

.controller('CustomerEditController',
		function($scope, $routeParams, $location, CustomerFactory, stateOptions, authTokenService) {
	$scope.customer = CustomerFactory.get({id: $routeParams.id});
	$scope.stateOpts = stateOptions;

	$scope.auth_error = false;

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
				if (response.status == '401') {
					$scope.auth_error = true;
					console.log("CustomerFactory.update() error response");
					console.log(response);
				}
				else {
					$scope.resp_data = response.data;
					//console.log("CustomerFactory.update() error response: " + response);
				}
			});
	}
})
