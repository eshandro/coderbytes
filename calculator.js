/*take the str parameter being passed and evaluate the mathematical expression within in. 
For example, if str were "2+(3-1)*3" the output should be 8. Another example: if str 
were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so 
you must evaluate it properly according to the rules of arithmetic. The string will 
contain the operators: +, -, /, *, (, and ). If you have a string like this: 
#/#*# or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for 
the second one multiply, divide, then add. The evaluations will be such that there will 
not be any decimal operations, so you do not need to account for rounding and whatnot
*/
function calculator(str) {
	var strList = str.split('');
	var numberTest = /\d/;
	var calcList = [];

	for (var i = 0; i < strList.length; i++) {
		if(numberTest.test(strList[i])) {
			calcList.push(+strList[i]);
		}
		else if (strList[i] === ')' && strList[i+1] === '(') {
			calcList.push(strList[i] + '*');
		}
		else {
			calcList.push(strList[i]);
		}
	}
	return eval(calcList.join(''));
};