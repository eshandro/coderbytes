function binaryConverter(str) {
  var binaryNumber = [];
  // First make array of the binary number string convereted to integers
  str.split('').forEach(function(curr, index) {
    return binaryNumber.push(parseInt(curr));
  });
  // The next step is to create an array of the powers of 2 
  // for each digit in the binary number -- from right to left.
  // Note: use of unshift with forEach to move from right to left
  var decimalNumber = [];
  binaryNumber.forEach(function(curr, index) {
    return decimalNumber.unshift(Math.pow(2,index));
  });
  console.log(decimalNumber);

  // If the corresponding binary digit is a zero, then the 
  // decimal digit should also be a zero, if not it will be the 
  // corresponding power of 2
  for (var i = binaryNumber.length-1; i >=0; i--) {
    if (binaryNumber[i] === 0) {
      decimalNumber[i] = 0;
    }
  }
  console.log(decimalNumber);

  // To complete conversion just add the numbers left in the 
  // decimalNumber array
  return decimalNumber.reduce(function(prev, curr) {
    return prev + curr;
  });
  
};