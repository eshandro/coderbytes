function bracketMatcher(str) {
  var leftBrackets = [];
  var rightBrackets = [];
  for (var i = 0; i < str.length; i++) {
    if(str[i] === '(') leftBrackets.push(str[i]);
    if(str[i] === ')') {
      if(leftBrackets.length === 0 || leftBrackets.length < rightBrackets.length + 1) {
        return 0;
      }
      rightBrackets.push(str[i]);
    }
  }
  if (leftBrackets.length !== rightBrackets.length || leftBrackets.length === 0 || rightBrackets.length === 0) {
    return 0;
  }
  return 1;
}