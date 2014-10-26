(function () {
  angular.module("controllers")
    .controller("ChildController", ["$scope", "$sce", "$modal", "$templateCache", function ($scope, $sce, $modal, $templateCache) {

      this.mountains = [
        {
          name: "Everest",
          heightM: 8.848,
          heightF: 29.029,
          description: "html/everest.html"
        },
        {
          name: "Kilimandjaro",
          heightM: 5895,
          heightF: 19341,
          description: "html/kilimandjaro.html"
        },
        {
          name: "Mont Blanc",
          heightM: 4810,
          heightF: 15780,
          description: "html/montblanc.html"
        }
      ];

      var that = this;
      this.selectedMountains = [];

      this.update = function() {
        var highest = {};
        $.each(that.selectedMountains, function(index, m){
          if (!highest.name || m.heightF > highest.heightF) {
            highest = m;
          }
        });
        that.highestMountain = highest;
        that.mountainDesc = $sce.trustAsHtml($templateCache.get(this.highestMountain.description));
      };

      this.highestMountain = {};
      this.mountainDesc = $sce.trustAsHtml(this.highestMountain.description);
      this.units = "m";

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