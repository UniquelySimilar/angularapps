customDirectiveApp.directive('customer', function() {
	return {
		restrict: 'E',
		scope: {
			customerInfo: '=info'
		},
		templateUrl: 'app/components/customer/customer-info.html'
	};
});