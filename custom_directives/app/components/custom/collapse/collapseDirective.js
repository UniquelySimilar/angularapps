directiveApp.directive('customCollapse', function () {
	return {
		restrict: 'A',
		templateUrl: 'app/components/custom/collapse/collapsePanel.html',
		link: function (scope, el, attrs) {
			scope.panelBaseId = attrs.collapsePanelBodyId;
			scope.panelId = attrs.collapsePanelId;
			
			$(document).ready(function() {
				angular.forEach(scope.ngModel, function(value, key) {
						if (value.collapsed) {
							$("#" + scope.panelBaseId + "-" + key).collapse('show');
						}
				});
			});
			
			scope.toggleCollapsedStates = function(ind) {
				angular.forEach(scope.ngModel, function(value, key) {
					if (key == ind) {
						scope.ngModel[key].collapsed = !scope.ngModel[key].collapsed;
						$("#" + scope.panelBaseId + "-" + ind).collapse('toggle');
					}
					else {
						scope.ngModel[key].collapsed = false;
					}
				});
			}
		}
	};
});