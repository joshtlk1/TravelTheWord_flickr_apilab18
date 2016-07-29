var app = angular.module("mySeasons");

app.controller('summerCtrl', function($scope, $http){
	$http({
  method: 'GET',
  url: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK'
}).then(function successCallback(response) {
   $scope.season = response.data.season;
  }, function errorCallback(response) {
    console.log(response);
  });
});
