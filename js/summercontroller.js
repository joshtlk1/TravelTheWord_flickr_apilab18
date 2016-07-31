var app = angular.module("mySeasons");

app.controller('summerCtrl', function($scope, $http, photoFactory){
	$scope.list;
	$scope.photoObject = photoFactory.returnObject();
	 $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function (data) {
      
    });
	
	jsonFlickrFeed = function(data){
	$scope.photos = data.items;
	 console.log($scope.photos);
	}
  

// 	$http({
//   method: 'GET',
//   url:"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
// }).then(function successCallback(response) {
//    $scope.items = response.data.items;
//   }, function errorCallback(response) {
//     console.log(response);
//   });
});



