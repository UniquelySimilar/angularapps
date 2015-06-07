directiveApp.directive('tpcTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
  return {

		controller: function($scope) {
		  $scope.format = 'M/d/yy h:mm:ss a';
		},

	  link: function(scope, element, attrs) {
	    var format,
	        timeoutId;

	    function updateTime() {
	      element.text(dateFilter(new Date(), format));
	    }

	    scope.$watch(attrs.tpcTime, function(value) {
	      format = value;
	      updateTime();
	    });

	    element.on('$destroy', function() {
	      $interval.cancel(timeoutId);
	    });

	    // start the UI update process; save the timeoutId for canceling
	    timeoutId = $interval(function() {
	      updateTime(); // update DOM
	    }, 1000);
	  }
  };
}]);