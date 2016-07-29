var app = angular.module("mySeasons");

app.controller('winterCtrl', ['$scope', function($scope, $window){
  $scope.checkForPalindrome = function(string) { 
	// palindrome is our string
  // get rid of the empty spaces in the array
  console.log("hello");
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
        console.log("A Santa at Nasa! " + palindrome + " is a palindrome!");
        var success = "A Santa at Nasa! " + palindrome + " is a palindrome!";
        $window.alert(sucess);
      } else {
		// if no then "A dog! A panic in a pagoda! Try again!"
      console.log("A dog! A panic in a pagoda! " + palindrome + " is not a palindrome. Try again.");
      	var failure = "A dog! A panic in a pagoda! " + palindrome + " is not a palindrome. Try again.";
      	$window.alert(failure);
      }
  return fantasticString;
};		

}]);		




