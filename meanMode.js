function meanMode(arr) {
  var mean = arr.reduce(function (prev, curr) {
    return prev + curr;
  }) / arr.length;
  // Find the mode (most occuring #) in array
  var occurList = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    occurList.push(count);
  }
  console.log(occurList);
  var mode = arr[occurList.indexOf(Math.max.apply(Math, occurList))];
  console.log(mode);
  if (mean === mode) {
    return 1;
  }
  else return 0;
}