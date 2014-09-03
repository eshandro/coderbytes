var isPrime = function(num) {
	if (num === 2 || num === 3) return true;
	if (num === 1) return false;
	if (num % 2 === 0) return false;
	if (num % 3 === 0) return false;
	if (num < 9) return true;
	var i = 5;
	while (i <= Math.sqrt(num)) {
		if (num % i === 0) return false;
		if (num % (i + 2) === 0) return false;
		else i += 6;
	}
	return true;
};

// Attempt to use caching via memiozation, but not working 
// always returns 'undefined'. Not sure why.
// isPrime.results is always an empty object
var isPrime = function(num) {
	// Create a cache for previously tested numbers
	// if one doesn't already exist
	if (!isPrime.results) isPrime.results = {};
	// Test if current num is in cache
	if (isPrime.results[num] !== null) {
		return isPrime.results[num];
	}
	if (num === 2 || num === 3) return isPrime.results[num] = false;
	if (num === 1) return isPrime.results[num] = false;
	if (num % 2 === 0) return isPrime.results[num] = false;
	if (num % 3 === 0) return isPrime.results[num] = false;
	if (num < 9) return isPrime.results[num] = true;
	var i = 5;
	while (i <= Math.sqrt(num)) {
		if (num % i === 0) return isPrime.results[num] = false;
		if (num % (i + 2) === 0) return isPrime.results[num] = false;
		else i += 6;
	}
	return isPrime.results[num] = true;
};

var primeNumbersList = function (num1, num2) {
	var answers = [];
	if (num1 <= 2) {
		answers.push(2)
	}
	if (num1 % 2 === 0) {
		var idx = num1 + 1;
		while (idx <= num2) {
			if (isPrime(idx)) {
				answers.push(idx);
				idx +=2;
			}
			else {
				idx += 2;
			}
		}
	}
	else {
		var idx = num1;
		while (idx <= num2) {
			if (isPrime(idx)) {
				answers.push(idx);
				idx +=2;
			}
			else {
				idx += 2;
			}
		}
	}
	return answers;
};