(function() {
  angular.module("services")
    .factory("mainService", ['$http', function($http) {

      var getWeather = function(lat, lon) {
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon;
        return $http.get(url);
      };

      return {
        getWeather: getWeather
      };

    }]);
})();