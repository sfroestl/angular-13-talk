(function (sandbox) {
    sandbox.angular.module('oneWayBindingExample', []);
    sandbox.angular.module('ngMessageExample', ['ngMessages']);
    sandbox.angular.module('ngModelOptionsExample', []);
    sandbox.angular.module('ngAriaExample', ['ngAria']);

    var examples = document.querySelectorAll('[ng-example]');

    Array.prototype.forEach.call(examples, function (element) {
        sandbox.angular.bootstrap(element, [element.attributes['ng-example'].value]);
    });

})(this);