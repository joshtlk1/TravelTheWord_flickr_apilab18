var app = angular.module("mySeasons");

app.controller('$scope', ['winterCtrl', function($scope){
	$scope.checkForPalindrome = function(palindrome) {
	// palindrome is our string
  	// new empty string to push to
  		var fantasticString = "";
  		for (var i = palindrome.length - 1; i >= 0; i--) { 
  	// make it lowercase
    		palindrome.toLowerCase();
    // as long as it's not a space, add the letter to the string
    		if (palindrome[i]) {
     			fantasticString += palindrome[i];
    		} 
    		console.log(fantasticString);
    	}
  	// does james === semaj?
      	if(fantasticString === palindrome) {
		// if yes, return "Great that's a palindrome!"
        console.log("A Santa at Nasa! That's a palindrome!");
      	} else {
		// if no, then "Try again!"
      	console.log("A dog! A panic in a pagoda! Try again!");
      	}
  	return fantasticString;

	};// close out checkForPalindrome
	
}]);
