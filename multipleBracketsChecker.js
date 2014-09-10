function multipleBracketsChecker(str) { 
  var leftBrackets = [];
  var rightBrackets = [];
  var leftParens = [];
  var rightParens = [];
  
  for (var i = 0; i < str.length; i++) {
    if(str[i] === '[') leftBrackets.push(str[i]);
    if(str[i] === ']') {
      if(leftBrackets.length === 0 || leftBrackets.length < rightBrackets.length + 1) {
        return 0;
      }
      rightBrackets.push(str[i]);
    }
    if (str[i] === '(') leftParens.push(str[i]);
    if (str[i] === ')') {
      if (leftParens.length === 0 || leftParens.length < rightParens.length +1) {
        return 0;
      }
      rightParens.push(str[i]);
    }
  }
  if (leftBrackets.length !== rightBrackets.length) {
    return 0;
  }
  if (leftParens.length !== rightParens.length) {
    return 0;
  }
  if (leftParens.length + rightParens.length + leftBrackets.length + rightBrackets.length === 0) {
    return 1;
  }
  return 1 + ' ' + (leftBrackets.length + leftParens.length);
}