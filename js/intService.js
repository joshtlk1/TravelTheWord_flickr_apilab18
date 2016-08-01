var app = angular.module("mySeasons");

// app.directive('helloDirective', function() {
// 	return {
// 		restrict: "E",
// 		template: "<img src='{{ photo.url }}'/><h1>Your winter spot {{destination}}</h1>",
// 		replace: false

// 	};

});

app.factory('photoFactory', function($scope) { 
  $scope.submitPhoto = function(photo) {
  photoFactory.saveObject(photo);

	// app.factory('photoFactory', function($scope) { 
	// service logic
	var emptyObject = {};
	// function that adds inputs to object
	function saveObject(photo){
		//set emptyObj to equal photo object
		emptyObject = photo;
		//whenver saveObject runs anything that pass through function is going to be stored inside of empty object
	};
	function returnObject() {
		return emptyObject; 
	};

// saveObject is a property with the value saveObject which is a function
// property : function
	return {
		saveObject: saveObject,
		returnObject: returnObject
	}


};
});