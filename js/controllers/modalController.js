(function () {
  angular.module("controllers")
    .controller("modalController", ["$scope", "$modalInstance", "unit", function ($scope, $modalInstance, unit) {

      $scope.data = {
        unit: unit
      };

      $scope.saveSettings = function () {
        $modalInstance.close($scope.data.unit);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    }])
})();
