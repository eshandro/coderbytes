function numberAddition(str) { 
  var numbersList = [];
  var currentNum = '';
  for (var i =0; i < str.length; i++) {
    if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
      currentNum += str.charAt(i);
      if (i === str.length-1) numbersList.push(parseInt(currentNum));
    }

    else {
      if (currentNum !== '') {
        numbersList.push(parseInt(currentNum));
        currentNum = '';
      }
    }
  }
  console.log(numbersList)
  if (numbersList.length === 0) return 0;
  return numbersList.reduce(function(prev, curr) {
    return prev + curr;
  })  
}