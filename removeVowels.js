// Remove all vowels from a String and return String

function removeVowels(str) {
	var answer = '';
	var vowels = {
		a: true,
		e: true,
		i: true,
		o: true,
		u: true
	};
	for (var i = 0; i < str.length; i++) {
		var tempChar = str[i].toLowerCase();
		if(!vowels[tempChar]) {
			answer += str[i];
		}
	};
	return answer;
}