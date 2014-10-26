(function () {

    var app = angular.module('app', ['controllers', 'directives', "checklist-model"]);

    angular.module('services', []);

    angular.module('controllers', ['services','ui.bootstrap','ngSanitize']);

    angular.module('directives', ['services']);

})();