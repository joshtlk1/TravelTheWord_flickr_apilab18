 var app = angular.module("mySeasons");
  
  app.controller('summerPhotoCtrl', function($scope, photoFactory){
	$scope.fotoObject = photoFactory.returnObject();
});

  app.controller('summerCtrl', function($scope, $http){

  	$scope.results = [];

  	$scope.search = function () {
  		$http({
  			method: "GET",
  			url: "https:api.flickr.com/services/rest",
  			params: {
  				method: "flickr.photos.search",
  				api_key:"ad636f0b136936ef8380dd9fac72901d",
  				text: $scope.searchTerm,
  				format:"json",
  				nojsoncallback: 1
  			}
  		}).success(function(data){
  			$scope.results = data;

  		}).error(function(error){
  			console.error(error);
  		});
  	}
 
 	//  $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function (data) {
      
  //    });
 	
 	// jsonFlickrFeed = function(data){
 	// $scope.photos = data.items;
 	// }
  
// 	$http({
//   method: 'GET',
//   url:"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
// }).then(function successCallback(response) {
//    $scope.items = response.data.items;
//   }, function errorCallback(response) {
//     console.log(response);
//   });
});




