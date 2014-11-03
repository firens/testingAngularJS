(function () {
  angular.module("controllers")
    .controller("ParentController", ["$scope", "mainService", function ($scope, mainService) {

      this.weather = {};

      var that = this;

      $scope.$on("highestEvent", function(event, mountain) {
        that.weather.mountainName = mountain.name;
        mainService.getWeather(mountain.coordinates[0], mountain.coordinates[1])
          .then(function (resp) {
            var data = resp.data;
            that.weather.desc = data.weather[0].description;
          })
          .catch(function (resp) {
            console.log(resp);
          });

      });

    }])
})();
