// Find first non-repeated character in a string

function findNoRepeat(str) {
	var charTable = {};
	for (var i = 0; i < str.length; i++) {
		var currChar = str.charAt(i);
		if (!charTable.currChar) {
			var numChars = str.split(currChar).length-1;
			if (numChars === 1) return currChar;
			charTable[currChar] = numChars;
		} 
	}
	console.log(charTable);
	return -1;
}