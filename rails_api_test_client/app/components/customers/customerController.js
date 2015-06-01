customersApp.controller('CustomerIndexController', function($scope, Customer, $location) {
	$scope.customers = Customer.query();

	$scope.predicate = 'name';

	$scope.name_hover = false;
	$scope.street_hover = false;
	$scope.city_hover = false;
	$scope.state_hover = false;
	$scope.zipcode_hover = false;
})

.controller('CustomerShowController', function($scope, $routeParams, Customer) {
	$scope.customer = Customer.get({id: $routeParams.id});
})

.controller('CustomerNewController', function($scope, Customer, $window) {
	$scope.customer = new Customer();
	// Set default state value
	$scope.customer.state = 'Colorado';
	$scope.customer.home_phone = '303-555-1212';
	$scope.customer.work_phone = '303-555-1212';
	$scope.resp_data = {};

	$scope.states = stateOptions;

	$scope.saveCustomer = function() {
		// resource object
		Customer.save($scope.customer,
			// Success
			function(value, headers){
				console.log(value);
				$window.location.href = '/rails_api_test_client/index.html';
			},
			// Error
			function(response){
				//console.log('Save error callback called');
				//console.log(response.data);
				$scope.resp_data = response.data;
				//console.log($scope.resp_data.errormsgs.Name);
			});
	}
})

.controller('CustomerUpdateController', function($scope, Customer) {
	console.log("Hello from CustomerUpdateController");

	$scope.message = "Hello from 'CustomerUpdateController'";
})

.controller('CustomerDestroyController', function($scope, Customer) {
	console.log("Hello from CustomerDestroyController");

	$scope.message = "Hello from 'CustomerDestroyController'";
});

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
