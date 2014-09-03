// Can any combination of an array of numbers be added up to 
// equal the largest number in the array

// This function finds all combinations of given array with 
// an array of arrays
function findPowerset(arr) {
	var powersets = [[]];
	for (var i=0; i < arr.length; i++) {
		for (var j = 0, len = powersets.length; j < len; j++) {
			powersets.push(powersets[j].concat(arr[i]));
		}
	}
	return powersets;
};

// Sums an array and gives inital value of 0 to prevent 
// an error when an array is empty
function sumArray(arr) {
  return arr.reduce(function(prev, curr) {
	return prev + curr;
  },0);
};

// Uses the above functions to test for the goal of overall function
function arrayAddition(arr) {
	var largestNum = Math.max.apply(Math, arr);
	console.log('largestNum: ', largestNum);
	// Removes the largest number from the array before testing
	arr.splice(arr.indexOf(largestNum),1);
	console.log('array after splice: ', arr);
	var powersets = findPowerset(arr);
	console.log('powersets found: ', powersets);
	for (var i=0; i < powersets.length; i++) {
		if (powersets[i].length > 1) {
			console.log('sumArray: ', sumArray(powersets[i]));
			if (sumArray(powersets[i]) === largestNum) {
				return true;
	  		}
		}
  	}
  return false;
};