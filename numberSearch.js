// Find all numbers in a string, add them up and divide them by the 
// total number of letters in the same string. Round to nearest number.
function numberSearch(str) {
  var str = str.toLowerCase();
  var letterCount = 0;
  var numList = [];
  for (var i = 0; i <str.length; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) letterCount++;
    if (str.charCodeAt(i) > 48 && str.charCodeAt(i) < 58) {
      numList.push(parseInt(str[i]));
    }
  }
  if (!numList.length) return 0;
  return Math.round(numList.reduce(function(prev,curr) {
    return prev + curr; 
  }) / letterCount);    
}