// define angular module/app
var formApp = angular.module('formApp', []);

// create angular controller and pass in $scope and $http
formApp.controller('formController', function($scope, $http) {
  // create a blank object to hold our form information
  // $scope will allow this to pass between controller and view
  $scope.formData = {};
  $scope.success = false;

  // process the form
  $scope.processForm = function() {
	  $http({
	  method  : 'POST',
	  url     : 'server/form-test-server.php',
	  data    : $.param($scope.formData),  // pass in data as strings
	  // set the headers so angular passing info as form data (not request payload)
	  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	  })
	  .success(function(data) {
	    console.log(data);

	    if (!data.success) {
	      // if not successful, bind errors to error variables
	      $scope.errorName = data.errors.name;
	      $scope.errorSuperhero = data.errors.superheroAlias;
	    } else {
	      // if successful, bind success message to message
	      $scope.message = data.message;
	      $scope.success = true;
	    }
	  });
  };
});
