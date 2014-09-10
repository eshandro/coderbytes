/*function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, 
and return an integer output that will specify the least number of coins, that when added, 
equal the input integer. Coins are based on a system as follows: there are coins representing 
the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 
because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output 
should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.*/ 

var coinDeterminer = function(number) {
	var coinValues = [1, 5, 7, 9, 11];
	var counter = 0;
	var workingNumber = number;
	for (i=coinValues.length-1; i >= 0; i--) {
		if(workingNumber > 0) {
			var currentCoinCount = Math.floor(workingNumber/coinValues[i]);
			if (currentCoinCount > 0) {
				if (workingNumber % (currentCoinCount*coinValues[i]) === 3) {
					currentCoinCount -= 1;
					counter += currentCoinCount;
					workingNumber = workingNumber - coinValues[i]*currentCoinCount;
				}
				else {
				counter += currentCoinCount;
				workingNumber = workingNumber - (coinValues[i]*currentCoinCount);
				}
			}
		}
		console.log(counter, workingNumber)
	}
	return counter;
}