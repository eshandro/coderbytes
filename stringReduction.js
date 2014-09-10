/*take the str parameter being passed and return the smallest number you can 
get through the following reduction method. The method is: Only the letters 
a, b, and c will be given in str and you must take two different adjacent characters 
and replace it with the third. For example "ac" can be replaced with "b" but "aa" 
cannot be replaced with anything. This method is done repeatedly until the string 
cannot be further reduced, and the length of the resulting string is to be outputted. 
For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can 
also reduce it to "cc"). The reduction is done so the output should be 2. If str is 
"bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the 
final string "ac" is reduced to "b" so the output should be 1.*/

function stringReduction(str) {
  var strList = str.split('');
  var possibleItems = ['a','b','c'];
  for (var i = 0; i < strList.length; i++) {
    console.log('i: ', i);
    if (strList.length <= 1) break;
    if (strList[i] !== strList[i+1] && i+1 <= strList.length-1) {
      var newItem = '';
      for (var j = 0; j < possibleItems.length; j++) {
        var curr = possibleItems[j];
        if (curr !== strList[i] && curr !== strList[i+1]) {
          newItem = curr;
        }
      };
      console.log('newItem found ', newItem);
      strList[i] = newItem;
      strList.splice(i+1,1);
      console.log('strList after add newItem & splice ', strList);
      i = -1;
    }
  }
  return strList.length;
}