customersApp.controller('CustomerIndexController', function($scope, Customer) {
	$scope.customers = Customer.query();
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

	$scope.states = statesAry;

	$scope.saveCustomer = function() {
		Customer.save($scope.customer,
			function(value, headers){
				console.log(value);
				$window.location.href = '/rails_api_test_client/index.html';
			},
			function(res){
				// NOTE: This error callback not called with standard setup.  Found info on web.
				console.log('Error callback called')

			});
//		Customer.save($scope.customer);
		// TODO: Handle possible error
		// Force a reload of the customer 'index' page
//		$window.location.href = '/rails_api_test_client/index.html';
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

var statesAry = {
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
