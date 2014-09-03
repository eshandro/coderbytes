function CountingMinutesI(str) {
  // Split into the 2 times
  var timesList = str.split('-');
  
  // Find the am or pm of each time
  var timeOneAMPM = timesList[0].substr(timesList[0].length-2, 2);
  console.log(timeOneAMPM);
  var timeTwoAMPM = timesList[1].substr(timesList[1].length-2, 2);
  console.log(timeTwoAMPM);
  timesList[0] = timesList[0].substr(0, timesList[0].length-2);
  timesList[1] = timesList[1].substr(0, timesList[1].length-2);

  var timeOne = timesList[0].split(':');

  var timeTwo = timesList[1].split(':');


  // convert each time to minutes
  if (timeOneAMPM === 'pm' && parseInt(timeOne[0]) !== 12 ) {
    timeOne[0] = parseInt(timeOne[0]) + 12;
  }
  if (timeOneAMPM === 'am' && parseInt(timeOne[0]) === 12 ) {
    timeOne[0] = parseInt(timeOne[0]) - 12;
  }
  else {
    timeOne[0] = parseInt(timeOne[0]);
  }
  timeOne = (timeOne[0] * 60) + parseInt(timeOne[1]);
  console.log('timeOne: ', timeOne)


  if (timeTwoAMPM === 'pm' && parseInt(timeTwo[0]) !== 12 ) {
    timeTwo[0] = parseInt(timeTwo[0]) + 12;
  }
  if (timeTwoAMPM === 'am' && parseInt(timeTwo[0]) === 12 ) {
    timeTwo[0] = parseInt(timeTwo[0]) - 12;
  }
  else {
    timeTwo[0] = parseInt(timeTwo[0]);
  }

  timeTwo = (timeTwo[0] * 60) + parseInt(timeTwo[1]);
  console.log('timeTwo: ', timeTwo);
  
  if (timeTwo < timeOne) {
    return (timeTwo + 1440) - timeOne;
  }
  else {
    return timeTwo - timeOne;
  }

}