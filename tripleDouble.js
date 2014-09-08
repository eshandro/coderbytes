/*have the function TripleDouble(num1,num2) take both parameters being passed, 
and return 1 if there is a straight triple of a number at any place in num1 
and also a straight double of the same number in num2. For example: if num1 
equals 451999277 and num2 equals 41177722899, then return 1 because in the 
first parameter you have the straight triple 999 and you have a straight double, 
99, of the same number in the second parameter. If this isn't the case, return 0. 
*/
function tripleDouble(num1, num2) {
	var tripleList = {};
	num1 = num1.toString();
	var count = 1;
	for (var i = 0; i < num1.length; i++) {
		if (num1[i] === num1[i+1]) count++;
		if (count > 1 && num1[i] !== num1[i+1]) count = 1;
		if (count === 3 && !tripleList[num1[i]]) {
			tripleList[num1[i]] = num1[i];
			count = 1;
		}
	}
	num2 = num2.toString();
	for (var key in tripleList) {
		var value = tripleList[key];
		for (var k = 0; k < num2.length; k++) {
			if (num2[k] === value && num2[k+1] === value) {
				return 1;
			}
		}
	}
	return 0;
}