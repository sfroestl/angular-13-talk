(function (sandbox) {
    sandbox.angular.module('example1', []);
    sandbox.angular.module('example2', ['ngMessages']);

    var examples = document.querySelectorAll('[ng-example]');

    Array.prototype.forEach.call(examples, function (element) {
        sandbox.angular.bootstrap(element, [element.attributes['ng-example'].value]);
    });

})(this);