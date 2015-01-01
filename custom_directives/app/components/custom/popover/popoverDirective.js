directiveApp.directive('customPopover', function() {
	return {
		restrict: 'A',
		template: '{{ label }}',
		link: function (scope, elem, attrs) {
			console.log("'custom-popover' directive loaded");
			scope.label = attrs.popoverLabel;
			$(elem).popover({
				trigger: 'click',
				html: true,
				content: attrs.popoverHtml,
				placement: attrs.popoverPlacement
			});
		}
	};
});