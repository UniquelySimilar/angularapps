muApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/orderform', {
			templateUrl : 'app/components/orderForm/orderFormView.html',
		})
		.when('/orderdetail', {
			templateUrl : 'app/components/orderDetail/orderDetailView.html',
		})
		.otherwise({
			redirectTo: '/orderform'
		});
}]);