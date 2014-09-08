function SwapII(str) {
  var strList = [];
  var answerList = [];
  // First switch case of str
  var answerStr = '';
  for (var i =0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      answerStr += str[i].toLowerCase();
    }
    else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      answerStr += str[i].toUpperCase();
    }
    else {
      answerStr += str[i];
    }
  }
  // Next, switch numbers if surround letters without any spaces;
  strList = answerStr.split(' ');
  for (var j = 0; j < strList.length; j++) {
    var currWord = strList[j].split('');
    console.log('currWord at split: ', currWord);
    var tempNum = [];
    for (var k = 0; k < strList[j].length; k++) {
      if (currWord[k].charCodeAt() > 47 && currWord[k].charCodeAt() < 58) {
        console.log('currWord[k] is a number')
        if (tempNum.length < 2) {
          console.log('pushing to tempNum', [currWord[k], k])
          tempNum.push([currWord[k], k])
          console.log('tempNum length after push: ', tempNum.length)
          console.log('tempNum = ', tempNum)
          if (tempNum.length === 2) {
            console.log('tempNum = 2')
            currWord[k] = tempNum[0][0];
            currWord[tempNum[0][1]] = tempNum[1][0];
            tempNum = [];
          }  
        }
      }
    }
    answerList.push(currWord.join(''));
  }
  return answerList.join(' ');
        
}