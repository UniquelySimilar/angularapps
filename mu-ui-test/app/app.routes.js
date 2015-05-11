muApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/order', {
			templateUrl : 'app/components/orderForm/orderFormView.html',
			controller  : 'OrderFormController'
		})
		.otherwise({
			redirectTo: '/order'
		});
}]);