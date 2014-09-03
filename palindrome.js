
// Solve if palindrome using recursion
var palindrome = function(str) {
	str = str.toLowerCase();
	// var testStr = '';
	if (str.length <= 1) {
		return true;
	}
	if (str.charAt(0) !== str.charAt(str.length-1)) {
		return false;
		// testStr = str.slice(1, str.length-1);
		// palindrome(str.slice(1, str.length-1));
	}
	return palindrome(str.slice(1, str.length-1));
	// else {
	// 	return false
	// };
};

// Solve if palendorme by converting to array, reversing array, joining 
// array to string and comparing to original string
var palindrome2 = function(str) {
	str = str.toLowerCase().split(' ').join('');
	if (str.split('').reverse().join('') === str) return true;
	else return false;
};

// Solve if palindrome by first elimnating all none a-z chars
var palindrome3 = function(str) {
	str = str.toLowerCase();

	var testStr = '';
	for (var i=0; i < str.length; i++) {
	if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
	  testStr += str.charAt(i);
		}  
	}
	return (testStr.split('').reverse().join('') === testStr);
};

var timesCharInString = function(char, str) {
	return str.split(char).length-1;

};

var changeToPalindrome = function(str) {
	str = str.toLowerCase().split(' ').join('');
	var odds = 0;
	// If str length is even ck to see if each character 
	// appears an even number of times. if not, return false.
	if (str.length % 2 === 0) {
		for (var i = 0; i < str.length; i++) {
			if ((str.split(str.charAt(i)).length-1) % 2 !== 0) {
				return false;
			} 
		}
		return true;
	}
	// If str length is odd ck to see how many character matches 
	// are an odd # of times. If more than one, return false.
	else {
		for (var i = 0; i < str.length; i++) {
			if ((str.split(str.charAt(i)).length-1) % 2 !== 0) {
				odds ++;
				if (odds > 1) {
					return false;
				}
			}
		}
		return true;
	}

};