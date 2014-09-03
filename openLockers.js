// 100 lockers - all closed. Begin by opening all 100 lockers. Then, you close every 2nd 
// locker. Then you start toggling lockers, opening if closed and closing if opened -- every 
// nth locker, starting with n=3 through n=100. How many lockers are open?

var toggleLocker = function (status) {
	if (status === 1) return 0;
	else return 1;
};

var findOpenLockers = function(num) {
	// Note: 1 = closed and 0 = open
	var lockersStatus = [];
	for (var i = 1; i <= num; i++) {
		if (i % 2 === 0) {
			lockersStatus.push(1);
		}
		else {
			lockersStatus.push(0);
		}
	}
	console.log(lockersStatus);
	for (var i = 3; i <= lockersStatus.length; i++) {
		for (var j = i-1; j < lockersStatus.length; j += i) {
			lockersStatus[j] = toggleLocker(lockersStatus[j]);
		}
	}
	console.log(lockersStatus);
	return 100 - lockersStatus.reduce(function(prev, curr) {
		return prev + curr;
	});
};