// Check if num is a number in the fibonacci sequence starting with 0

function fibonacciChecker(num) { 
	// Note: a number is in the sequence if and only if:
	// 5N^2 + 4 || 5N^2 - 4 is square
	// Math stuff proves this
	var test1 = 5 * Math.pow(num,2) + 4;
	var test2 = 5 * Math.pow(num,2) - 4;
	if (Math.sqrt(test1) % 1 === 0 || Math.sqrt(test2) % 1 === 0) return 'yes';
	console.log('mod of sqrt of test1: ', Math.sqrt(test1) % 1)
	console.log('mod of sqrt of test2: ', Math.sqrt(test2) % 1)
	return 'no';
}

function fibonacciSequence(num) {
	var sequence = [];
	for (var i = 0; i <= num; i++) {
		if (i < 2) sequence.push(i);
		else {
			sequence.push(sequence[i-2] + sequence[i-1]);
		}
	}
	return sequence;
}