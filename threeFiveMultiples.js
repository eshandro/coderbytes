// Return total of all numbers that are multiples of 3 & 5 that are 
// less than the num parameter

function threeFiveMultiples(num) {
  var answerArr = [];
  if (num <= 3) return 0;
  if (num <= 5) return 3;
  answerArr = [3,5];
  for (var i = 2; i <= num/3; i++) {
    if (i * 3 < num) answerArr.push(i*3);
    if (i * 5 < num && (i*5) % 3 !== 0) answerArr.push(i*5);
  }
  return answerArr.reduce(function(a,b) {
    return a + b;
  });
}