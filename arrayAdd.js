function sumArray = function(arr) {
  arr.reduce(function(prev, curr) {
    return prev + curr;
  })
};


// Take the array of numbers stored in arr and return the string true if any
// combination of numbers in the array can be added up to equal the largest number 
// in the array, otherwise return the string false. For example: if arr contains 
// [4, 6, 23, 10, 1, 3] the output should return true because 
// 4 + 6 + 10 + 3 = 2


function arrayAddition(arr) {
  var largestNum = Math.max.apply(Math, arr);
  var indexOfLargest = arr.indexOf(largestNum);
  console.log('largest ', largestNum);
  console.log('index ', indexOfLargest);
  arr.splice(indexOfLargest,1);
  console.log('arr after splice ', arr);
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (j !== i) {
        total += arr[j];
        if (total === largestNum) return true;       
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (k !== i) {
        total -= arr[k];
        if (total === largestNum) return true;
      }
    }
    total = 0;
  }
  return false;
};