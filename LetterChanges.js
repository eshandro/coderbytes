function LetterChanges(str) {
  var answerStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      if (str.charCodeAt(i) === 122) {
        answerStr += String.fromCharCode(65);
      }

      if (str.charCodeAt(i) === 100) {
        answerStr += String.fromCharCode(69);
      }

      if (str.charCodeAt(i) === 104) {
        answerStr += String.fromCharCode(73);
      }

      if (str.charCodeAt(i) === 110) {
        answerStr += String.fromCharCode(79);
      }

      if (str.charCodeAt(i) === 116) {
        answerStr += String.fromCharCode(85);
      }

      if (str.charCodeAt(i) !== 122 && str.charCodeAt(i) !== 100 && 
          str.charCodeAt(i) !== 104 && str.charCodeAt(i) !== 110 && 
          str.charCodeAt(i) !== 116) {
          console.log('add one is called');
          console.log('charCode: ', str.charCodeAt(i));
          answerStr += String.fromCharCode(str.charCodeAt(i) + 1);
      }

    }
    
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      if (str.charCodeAt(i) === 90) {
        answerStr += 'A';
          }
      else {
        answerStr += String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
    
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 122) {
      answerStr += str.charAt(i);
    }
    if (str.charCodeAt(i) > 90 && str.charCodeAt(i) < 97) {
      answerStr += str.charAt(i);
    }
  
  } 
  return answerStr;  
}  