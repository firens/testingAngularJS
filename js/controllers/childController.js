(function () {
  angular.module("controllers")
    .controller("ChildController", ["$scope", "$modal", "$templateCache", "$sce", function ($scope, $modal, $templateCache, $sce) {

      this.mountains = [
        {
          name: "Everest",
          coordinates: [27.98833,86.92528],
          height: 8848,
          description: "html/everest.html"
        },
        {
          name: "Kilimandjaro",
          coordinates: [-3.076171,37.352824],
          description: "html/kilimandjaro.html",
          height: 5895
        },
        {
          name: "Mont Blanc",
          coordinates: [45.832627,6.864717],
          description: "html/montblanc.html",
          height: 4810
        }
      ];

      var that = this;
      this.selectedMountains = [];

      this.update = function() {
        var highest = {};
        $.each(that.selectedMountains, function(index, m){
          if (!highest.name || m.height > highest.height) {
            highest = m;
          }
        });
        that.highestMountain = highest;
        that.mountainDesc = $sce.trustAsHtml($templateCache.get(this.highestMountain.description));

        $scope.$emit('highestEvent', highest);
      };

      this.highestMountain = {};
      this.mountainDesc = $sce.trustAsHtml(this.highestMountain.description);
      this.units = 'm';

      this.openSettings = function() {
        var modalInstance = $modal.open({
          templateUrl: 'html/modal.html',
          controller: 'modalController',
          resolve: {
            unit: function () {
              return that.units;
            }
          }
        });

        modalInstance.result.then(function (newUnit) {
          that.units = newUnit;
        }, function () {});
      };

    }])
})();