// Find the mode of an array of numbers. If there is more than one 
// mode return the first one. If no mode, return -1

function simpleMode(arr) {
  var countList = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = arr.length-1; j > i; j--) {
      if (arr[i] === arr[j]) count++;
    }
    countList.push(count);
  }
  console.log(countList);
  if (countList.reduce(function(prev, curr) {
      return prev + curr;
      }) === 0) return -1;
  return arr[countList.indexOf(Math.max.apply(Math,countList))];                       
}