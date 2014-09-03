function swapCase(str) {
  var tempList = str.split('');
  var answer = '';
  for (var i = 0; i < tempList.length; i++) {
    if (tempList[i].charCodeAt(0) > 96 && tempList[i].charCodeAt(0) < 123) {
      console.log(tempList[i].charCodeAt())
      answer += tempList[i].toUpperCase();
      console.log(answer)
    }
    if (tempList[i].charCodeAt(0) > 64 && tempList[i].charCodeAt(0) < 91) {
      answer += tempList[i].toLowerCase();
    }
    if (tempList[i].charCodeAt(0) <= 64 || tempList[i].charCodeAt(0) >= 123) {
      answer += tempList[i];
    }
    if (tempList[i].charCodeAt(0) > 90 && tempList[i].charCodeAt(0) < 97) {
      answer += tempList[i];
    }
        
  }
  return answer;
}