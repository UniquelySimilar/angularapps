directiveApp.controller('imagesController', ['$scope', '$http', function($scope, $http) {
	// Add/remove images processing
	$scope.image_count = 1;
	$scope.image_html = "<p>Uninitialized image HTML</p>";
	$scope.image_numbers = [];
/*
	$http.get('app/components/custom/images/image_container.html').
	success(function(data, status) {
		$scope.image_html = data;
		//console.log($scope.image_html);
	}).
	error(function(data, status) {
		console.error("imagesController '$http.get()' failed.")
	});
*/
	$scope.addImage = function() {
		console.log("imagesController 'addImage()' called.");
		$scope.image_numbers.push($scope.image_count++);
	};

	$scope.removeImage = function() {
		console.log("imagesController 'removeImage()' called.");
		// Remove the associated object from the image array
	};

	$scope.resetPage = function() {
		console.log("imagesController 'resetPage()' called.");
		
		while($scope.image_numbers.length > 0) {
			$scope.image_numbers.pop();
		}

		$scope.image_count = 1;
	};
}]);
