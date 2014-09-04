function formattedDivision(num1,num2) {
  var dividedNum = num1 / num2;
  var answerList = dividedNum.toString();
  var leftSide = [];
  var rightSide = [];
  answerList = answerList.split('.');
  if (answerList.length === 1) rightSide.push('.0000');
  var count = 0;
  for (var i = answerList[0].length-1; i >=0; i--) {
    leftSide.unshift(answerList[0].charAt(i));
    count++;
    if (count === 3) {
      leftSide.unshift(',');
      count = 0;
    }
  }
  
  if (answerList[1]) {
    rightSide.push('.');
    for (var j = 0; j < answerList[1].length; j++) {
      if (answerList[1].length === 0) { 
        rightSide.push('0000');
        break;
      }
      if (j > 3) break;
      rightSide.push(answerList[1].charAt(j));
    }
  }
  leftSide = leftSide.join('');
  rightSide = rightSide.join('');
  return leftSide + rightSide;                   
}

// 2nd way to do using toFixed
function formattedDivision2(num1, num2) {
  var dividedNum = num1 / num2;
  dividedNum = dividedNum.toFixed(4);
  console.log(dividedNum);
  var leftSide = dividedNum.substring(0, dividedNum.indexOf('.'));
  leftSide = leftSide.split('');
  console.log(leftSide);
  var count = 0;
  var tempList = [];
  for (var i = leftSide.length-1; i >=0; i--) {
    tempList.unshift(leftSide[i]);
    count++;
    if (count === 3) {
      tempList.unshift(',');
      count = 0;
    }
  }
  leftSide = tempList.join('');
  return leftSide + dividedNum.substring(dividedNum.indexOf('.'));

}