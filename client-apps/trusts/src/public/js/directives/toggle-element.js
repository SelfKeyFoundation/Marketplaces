var clickDirective = angular.module('clickDirective', []);
clickDirective.directive('clickActive', [function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.on('click', function () {
        element.toggleClass("state-on");
        if (attr.moreClasses) {
          // Optionally toggle more classes if passed
          element.toggleClass(attr.moreClasses);
        }
      });
    }
  };
}]);