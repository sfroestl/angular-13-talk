(function (sandbox) {
    sandbox.angular.module('oneWayBindingExample', []);
    sandbox.angular.module('ngMessageExample', ['ngMessages']);
    sandbox.angular.module('ngModelOptionsExample', []);
    sandbox.angular.module('ngAriaExample', ['ngAria']);


    sandbox.angular.module('ngValidatorsExample', ['ngMessages'])
        .directive('available', function ($timeout) {
            return {
                require: 'ngModel',
                link: function ($scope, element, attrs, ngModel) {
                    ngModel.$asyncValidators.available = function (username) {
                        return $timeout(function () {
                            return true;
                        }, 1000, false);
                    };
                }
            };
        });


    sandbox.angular.module('ngAnimateExample', ['ngAnimate'])
        .directive('animateToClick', ['$animate', function ($animate) {
            return function ($scope, element) {
                var indicator = element[0].querySelector('.click-indicator');

                element.on('click', function (e) {

                    $animate.animate(angular.element(indicator), {}, {
                        left: e.offsetX + 'px',
                        top: e.offsetY + 'px'
                    }, 'is-animating');

                    $scope.$digest();
                });
            }
        }]);


    var examples = document.querySelectorAll('[ng-example]');

    Array.prototype.forEach.call(examples, function (element) {
        sandbox.angular.bootstrap(element, [element.attributes['ng-example'].value]);
    });

})(this);