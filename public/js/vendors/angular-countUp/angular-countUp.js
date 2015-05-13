'use strict';

angular.module('countUp', []).directive('countup', function () {
	return {
		restrict: 'EAC',
		replace: true,
		template: '<div></div>',
		scope: {
			startval: '=',
			endval: '=',
			decimals: '=',
			duration: '=',
			options: '='
		},
		link: function (scope, element, attrs) {
			var start = function() {
				var startval = scope.startval || 0;
				var endval = scope.endval || 0;
				var options = scope.options || {
					useEasing : true, 
					useGrouping : true, 
					separator : ',', 
					decimal : '.' 
				};
				var cu = new countUp(element[0], startval, endval, scope.decimals, scope.duration, options);
				cu.start();
			};
			scope.$watch('endval', function (value) {
				if (typeof value === 'number') {
					start();
				}
			});
			return true;
		}
	};
});
