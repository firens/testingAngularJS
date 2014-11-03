(function () {

    var app = angular.module('app', ['controllers', 'checklist-model']);

    angular.module('services', []);

    angular.module('controllers', ['services','ui.bootstrap','ngSanitize']);

})();