 var app = angular.module("mySeasons");
  
  app.controller('summerPhotoCtrl', function($scope, photoFactory){
	$scope.fotoObject = photoFactory.returnObject();
});

  app.controller('summerCtrl', function($scope, $http){
 	$http({
   method: 'GET',
   url:"https://teamtreehouse.com/erikabergman.json"
 }).then(function successCallback(response) {
    $scope.badges = response.badges;
   }, function errorCallback(response) {
     console.log(response);
   });
 	$scope.list;
 
 	 $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function (data) {
      
     });
 	
 	jsonFlickrFeed = function(data){
 	$scope.photos = data.items;
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




