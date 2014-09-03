function caesarCipher(str,num) {
  // a-z char codes = 97-122 & A-Z 65-90
  var answer = '';
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode > 64 && charCode < 91) {
      if (charCode+num > 64 && charCode+num < 91) {
        answer += String.fromCharCode(charCode+num);
      }
      if (charCode+num > 90) {
        answer += String.fromCharCode((charCode+num) - 26);
      }
    }    
    if (charCode > 96 && charCode < 123) {
      if (charCode+num > 96 && charCode+num < 123) {
        answer += String.fromCharCode(charCode+num);
      }
      if (charCode+num > 122) {
        answer += String.fromCharCode((charCode+num) - 26);
      }
    }
    if (charCode < 65 || charCode > 122) {
      answer += str[i];
    }
    if (charCode > 90 && charCode < 97) {
      answer += str[i];
    }
  }
  return answer;
}