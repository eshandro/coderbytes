// Return the number of duplicates from a list of numbers.
// For example if the input is [1, 2, 2, 2, 3] then your program 
// should output 2 because there are two duplicates of one of the elements

function distinctList(arr) {
	var testObj = {};
	var counter = 0;
	for (var i = 0; i < arr.length; i++) {
		
		var currNum = arr[i].toString();
		if (!testObj[currNum]) {
			testObj[currNum] = currNum;
		}
		else {
			counter++;
		}
	}
	return counter;
}