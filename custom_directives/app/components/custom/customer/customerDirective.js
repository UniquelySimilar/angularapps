directiveApp.directive('customer', function() {
	return {
		restrict: 'E',
		scope: {
			customerInfo: '=info'
		},
		templateUrl: 'app/components/custom/customer/customer-info.html'
	};
});