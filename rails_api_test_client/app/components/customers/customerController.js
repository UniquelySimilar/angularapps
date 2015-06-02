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

.controller('CustomerNewController', function($scope, CustomerFactory, $location) {
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

.controller('CustomerEditController', function($scope, $routeParams, $location, CustomerFactory) {
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

// TODO: Put this object in a service
var stateOptions = {
	'Alabama': 'Alabama',
	'Alaska': 'Alaska',
	'Arizona': 'Arizona',
	'Arkansas': 'Arkansas',
	'California': 'California',
	'Colorado': 'Colorado',
	'Connecticut': 'Connecticut',
	'Delaware': 'Delaware',
	'District of Columbia': 'District of Columbia',
	'Florida': 'Florida',
	'Georgia': 'Georgia',
	'Hawaii': 'Hawaii',
	'Idaho': 'Idaho',
	'Illinois': 'Illinois',
	'Indiana': 'Indiana',
	'Iowa': 'Iowa',
	'Kansas': 'Kansas',
	'Kentucky': 'Kentucky',
	'Louisiana': 'Louisiana',
	'Maine': 'Maine',
	'Maryland': 'Maryland',
	'Massachusetts': 'Massachusetts',
	'Michigan': 'Michigan',
	'Minnesota': 'Minnesota',
	'Mississippi': 'Mississippi',
	'Missouri': 'Missouri',
	'Montana': 'Montana',
	'Nebraska': 'Nebraska',
	'Nevada': 'Nevada',
	'New Hampshire': 'New Hampshire',
	'New Jersey': 'New Jersey',
	'New Mexico': 'New Mexico',
	'New York': 'New York',
	'North Carolina': 'North Carolina',
	'North Dakota': 'North Dakota',
	'Ohio': 'Ohio',
	'Oklahoma': 'Oklahoma',
	'Oregon': 'Oregon',
	'Pennsylvania': 'Pennsylvania',
	'Puerto Rico': 'Puerto Rico',
	'Rhode Island': 'Rhode Island',
	'South Carolina': 'South Carolina',
	'South Dakota': 'South Dakota',
	'Tennessee': 'Tennessee',
	'Texas': 'Texas',
	'Utah': 'Utah',
	'Vermont': 'Vermont',
	'Virginia': 'Virginia',
	'Washington': 'Washington',
	'West Virginia': 'West Virginia',
	'Wisconsin': 'Wisconsin',
	'Wyoming': 'Wyoming'
};
