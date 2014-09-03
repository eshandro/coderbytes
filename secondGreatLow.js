function secondGreatLow(arr) {
  var answer = ''
  if (arr.length === 2) {
    if (arr[0] <= arr[1]) {
      answer = arr[1] + ' ' + arr[0];
      return answer;
    }
    else {
      answer = arr[0] + ' ' + arr[1];
      return answer;
    }
  }
  var min = Math.min.apply(Math, arr);
  var max = Math.max.apply(Math, arr);
  arr.splice(arr.indexOf(min),1);
  while (Math.min.apply(Math, arr) === min && arr.length > 2) {
    min = Math.min.apply(Math, arr);
    arr.splice(arr.indexOf(min),1);
  }
  min = Math.min.apply(Math, arr);
  answer += min + ' ';
  arr.splice(arr.indexOf(max),1);
    while (Math.max.apply(Math, arr) === max && arr.length > 2) {
      max = Math.max.apply(Math, arr);
      arr.splice(arr.indexOf(max),1);
    }
  max = Math.max.apply(Math, arr);
  answer += max;
  return answer;    
}