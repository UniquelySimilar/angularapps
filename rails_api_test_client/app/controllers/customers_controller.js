customersApp.controller('CustomerIndexController', function($scope, Customer) {
	$scope.customers = Customer.query();
})
.controller('CustomerShowController', function($scope, $routeParams, Customer) {
	$scope.customer = Customer.get({id: $routeParams.id});
})
.controller('CustomerNewController', function($scope, Customer, $location) {
	$scope.customer = new Customer();
	// Set default state value
	$scope.customer.state = 'Colorado';

	$scope.states = {
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

	$scope.saveCustomer = function() {
		Customer.save($scope.customer);
		// TODO: Handle possible error
		$location.path('/');
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