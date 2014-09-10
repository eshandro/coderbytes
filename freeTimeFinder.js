function millisecondsToTime(duration) {
        var minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    return hours + ":" + minutes;
}

function freeTimeFinder(strArr)  {
	var meetings = [];
	var timeBetween = [];
  
  	// Convert all times to milliseconds based on arbitrary date
  	for (var i = 0; i < strArr.length; i++) {
		var tempArr = strArr[i].split('-');
		console.log('tempArr: ', tempArr);
		for (var j = 0; j < tempArr.length; j++) {
			var pmOrAm = tempArr[j].substring(tempArr[j].length-2);

			var tempHours = +tempArr[j].substring(0,2);
			var tempMinutes = tempArr[j].substring(tempArr[j].length-4,tempArr[j].length-2);
			if (pmOrAm === 'PM' && tempHours !== 12) {
			  tempHours += 12;
			}
			if (pmOrAm === 'AM' && tempHours === 12) {
			  tempHours -= 12;
			}
			tempHours = tempHours.toString();
			if (tempHours.length < 2) tempHours = '0' + tempHours;
			console.log('tempHours after convert: ', tempHours);
			var tempDate = '2014-09-10T' + tempHours + ':' + tempMinutes;
			console.log('tempDate: ', tempDate);
			tempArr[j] = Date.parse(tempDate);
		}
		meetings.push(tempArr);
	}
	// Sort by start time
	var startTimes = [];
	for (var k = 0; k < meetings.length; k++) {
		startTimes.push(meetings[k][0]);
	}
	startTimes = startTimes.sort();
	var sortedMeetings = [];
	for (var l = 0; l < startTimes.length; l++) {
		for (var m = 0; m < meetings.length; m++) {
			if (startTimes[l] === meetings[m][0]) {
				sortedMeetings.push(meetings[m]);
			}
		}
	};
	for (var n = 0; n < sortedMeetings.length-1; n++) {
		timeBetween.push(sortedMeetings[n+1][0] - sortedMeetings[n][1]);
	}
	timeBetween = timeBetween.sort(function(a,b) {
		return b - a;
	});
	console.log(timeBetween);
	return millisecondsToTime(timeBetween[0]);
}
