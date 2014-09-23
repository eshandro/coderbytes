function blackjackHighest(strArr) {
	var total = 0;
	var aceCount = 0;
	var highestCard = [];
	var status;
	var aceValue = 11;
	var cardValues = {
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'jack': 10,
		'queen': 10,
		'king': 10,
	};
	var tenners = ['ten', 'jack', 'queen', 'king'];
	for (var i = 0; i < strArr.length; i++) {
		if (strArr[i] === 'ace') {
			aceCount++;
		}
		if (strArr[i] !== 'ace') {
			if (highestCard.length === 0) highestCard.push(strArr[i]);
			if (highestCard.length > 0) {
				if (cardValues[strArr[i]] === 10 && cardValues[highestCard[0]] === 10) {
					highestCard[0] = tenners.indexOf(strArr[i]) > tenners.indexOf(highestCard[0]) ? strArr[i] : highestCard[0];
				}
				if (cardValues[strArr[i]] > cardValues[highestCard[0]]) highestCard[0] = strArr[i];

			}
			if (cardValues[strArr[i]]) {
				total += cardValues[strArr[i]];
			}
		}
	}
	if (total > 21) {
		status = 'over';
		return status + ' ' + highestCard[0];
	}
	if (aceCount > 0) {
		for (var j = 1; j <= aceCount; j++) {
			if (total > 10) {
				aceValue = 1;
				total += aceValue;
			}
			else {
				total += aceValue;
			}
		}
	}
	if (total === 21) status = 'blackjack';
	if (total > 21) status = 'above';
	if (total < 21) status = 'below';
	if (aceValue === 11 && aceCount > 0) highestCard[0] = 'ace';
	console.log('total ', total);
	console.log('aceCount ', aceCount);
	console.log('status', status);
	console.log('highestCard', highestCard);
	return status + ' ' + highestCard[0];   
}