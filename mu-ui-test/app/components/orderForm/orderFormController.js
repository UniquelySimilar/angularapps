muApp.controller('orderFormController', ['$scope', '$location', function($scope, $location) {
	//console.log('orderFormController called');

	$scope.formData = {};
	$scope.orderTotal = 0;

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

		$scope.orderTotal = total;
	};

	$scope.processOrderForm = function() {
		//console.log("Form submitted");

		$location.path('/orderdetail');
	};

	$scope.newOrderForm = function() {
		//console.log("Form submitted");

		// 'serviceOptions' has been defined since at least one service checked
		if ($scope.orderTotal > 0) {
			$scope.formData.serviceOptions.webdev = false;
			$scope.formData.serviceOptions.webdesign = false;
			$scope.formData.serviceOptions.photo = false;
			$scope.formData.serviceOptions.coffee = false;
		}

		$scope.orderTotal = 0;

		$location.path('/orderform');
	};
}]);