// Return word with greates # of repeated letters. Words will be separated by spaces. 
// If no words have repeated letters, return -1.

function letterCount(str) {
  var wordList = str.split(' ');
  var repeatCount = 0;
  var countList = [];
  for (var i = 0; i < wordList.length; i++) {
    for (var k = 0; k < wordList[i].length; k++) {
      var currentWord = wordList[i];
      if (currentWord.split(currentWord.charAt(k)).length-1 > 1) {
        repeatCount++;
        console.log(repeatCount);
      }
    }
    countList.push(repeatCount);
    repeatCount = 0;
  }
  console.log(countList);
  if (countList.reduce(function(prev, curr) {return prev + curr; }) === 0) {
      return -1; 
      }
  return wordList[countList.indexOf(Math.max.apply(Math,countList))];
      
}
 