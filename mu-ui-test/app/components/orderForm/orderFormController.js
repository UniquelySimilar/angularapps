muApp.controller('OrderFormController', ['$scope', function($scope) {
	console.log('OrderFormController called');

	$scope.formData = {};
	$scope.formTotal = 0;

	$scope.addServiceOptions = function() {
		var total = 0;
		if ($scope.formData.serviceOptions.webdev) {
			total += 200;
		}
		if ($scope.formData.serviceOptions.webdesign) {
			total += 250;
		}
		if ($scope.formData.serviceOptions.photo) {
			total += 100;
		}
		if ($scope.formData.serviceOptions.coffee) {
			total += 10;
		}

		$scope.formTotal = total;
	};

	$scope.processForm = function() {
		console.log("Form submitted");
	};
}]);