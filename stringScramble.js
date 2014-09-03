// Can str2 be made from some combination of str1?

function stringScramble(str1,str2) {
  if (str2.length > str1.length) return false;
  for (var i = 0; i < str2.length; i++) {
    var count = 0;
    for (var k = 0; k < str1.length; k++) {
      if(str2[i] === str1[k]) {
        str1 = str1.slice(0,k) + str1.slice(k+1);
        console.log(k);
        console.log(str1);
        count++;
        break;
      }
    }
    if (count === 0) return false;
  }
  return true;
}