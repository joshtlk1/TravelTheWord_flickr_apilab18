var app = angular.module("mySeasons");

app.controller('summerCtrl', function($scope, $http){
	$http({
  method: 'GET',
  url: 'http://history.openweathermap.org/data/2.5/history/city?id={4990729}&type=hour&start={1466467200}&end={1469664000}'
}).then(function successCallback(response) {
   $scope.season = response.data.season;
  }, function errorCallback(response) {
    console.log(response);
  });
});
