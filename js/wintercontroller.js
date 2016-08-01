var app = angular.module("mySeasons");

app.controller('winterCtrl', ['$scope', '$sce', function($scope, $sce, photoFactory) {
  

  var message;
  $scope.checkForPalindrome = function(string) { 
  // get rid of the empty spaces in the array
     var palindrome = string.replace(/\s+/g, '');
  // all lowercase letters
     palindrome = palindrome.toLowerCase();
  // new empty string to push to
  var fantasticString = '';
  for (var i = palindrome.length - 1; i >= 0; i--) {
    // backwards string
     fantasticString += palindrome.charAt(i);
//      console.log(fantasticString);
  }
  	// does james === semaj?
      if(fantasticString === palindrome) {
		// if yes return "Great that's a palindrome!"
		// these should be alerts
        message = "A Santa at Nasa! <em>" + string + "</em> is a palindrome!";
      } else {
		// if no then "A dog! A panic in a pagoda! Try again!"
      	message = "A dog! A panic in a pagoda! <em>" + string + "</em> is not a palindrome. Try again.";
      }
   // return $scope.fantasticString;
   $scope.fantasticString = message;
};		

  $scope.submitPhoto = function(photo) {
    console.log(photo);
  // photoFactory.saveObject(photo);
  };


}]);