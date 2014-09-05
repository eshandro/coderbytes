// Write a function to find permutations of a list of 
// a number or list of characters

function convertToArr(input) {
	var inputArr = [];
	// Test input of if String or Number and convert to 
	// array accordingly
	if (typeof input === 'string') {
		inputArr = input.split('');
		console.log('String to array: ', inputArr);
	}
	else if (typeof input === 'number') {
		inputArr = input.toString().split('');
		console.log('Number to String to array: ', inputArr);
	}
	return inputArr;
}


function findPermutations(inputArr) {
	var results = [];
	function permute(arr,data) {
		console.log('permute called');
		console.log('arr passed: ', arr)
		var current;
		var temp = data || [];

		for (var i = 0; i < arr.length; i++) {
			current = arr.splice(i,1)[0];
			console.log('current: ', current);
			console.log('arr: ', arr)
			if (arr.length === 0) results.push(temp.concat([current]));
			permute(arr.slice(), temp.concat([current]));
			arr.splice(i, 0, current);
		}
		return results;
	}
	return permute(inputArr);
}

function permutationStep(num) {
  var converted = convertToArr(num);
  var permList = findPermutations(converted);
  // Join and convert to numbers
  for (var i = 0; i < permList.length; i++) {
    permList[i] = +permList[i].join('');
  }
  // Sort permList ascending
  permList = permList.sort(function(a,b) {
    return a - b;
  });
  // Find next highest permutation
  for (var j = 0; j < permList.length; j++) {
    console.log(permList[j]);
    if (permList[j] > num) {
      return permList[j];
    }
  }
  return -1;
}
