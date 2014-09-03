function formattedDivision(num1,num2) {
  var dividedNum = num1 / num2;
  var answerList = dividedNum.toString();
  var leftSide = [];
  var rightSide = [];
  answerList = answerList.split('.');
  if (answerList.length === 1) answerList.push('');
  var count = 0;
  // if (answerList[0].length =0) leftSide.push('0'); 
  for (var i = answerList[0].length-1; i >=0; i--) {
    leftSide.unshift(answerList[0].charAt(i));
    count++;
    if (count === 3) {
      leftSide.unshift(',');
      count = 0;
    }
  }
  rightSide.push('.');
  if 
  for (var j = 0; j < answerList[1].length; j++) {
    if (answerList[1].length === 0) { 
      rightSide.push('0000');
      break;
    }
    if (j > 3) break;
    rightSide.push(answerList[1].charAt(j));
  }
  leftSide = leftSide.join('');
  rightSide = rightSide.join('');
  return leftSide + rightSide;
                   
}