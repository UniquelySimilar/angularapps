directiveApp.controller('imagesController', ['$scope', '$http', function($scope, $http) {
	// Add/remove images processing
	$scope.img_count = 1;
	$scope.image_html = "<p>Uninitialized image HTML</p>";
	$scope.images = [];

	$http.get('app/components/custom/images/image_container.html').
	success(function(data, status) {
		$scope.image_html = data;
		//console.log($scope.image_html);
	}).
	error(function(data, status) {
		console.error("imagesController '$http.get()' failed.")
	});

	$scope.addImage = function() {
		console.log("imagesController 'addImage()' called.");
//		$scope.images.push($scope.image_html);
	};

	$scope.resetPage = function() {
		console.log("imagesController 'resetPage()' called.");
	};
}]);
