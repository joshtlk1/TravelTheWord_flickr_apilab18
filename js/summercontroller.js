var app = angular.module("mySeasons");

app.controller('summerCtrl', function($scope, $http){
	$http({
  method: 'GET',
  url:"https://teamtreehouse.com/erikabergman.json"
}).then(function successCallback(response) {
   $scope.badges = response.badges;
  }, function errorCallback(response) {
    console.log(response);
  });
});
