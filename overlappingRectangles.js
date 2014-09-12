/*the function OverlappingRectangles(strArr) read the strArr parameter being passed 
which will represent two rectangles on a Cartesian coordinate plane and will contain 
8 coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 
2. It will be in the following format: "(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)." 
Your program should determine the area of the space where the two rectangles overlap, 
and then output the number of times this overlapping region can fit into the first 
rectangle. For the above example, the overlapping region makes up a rectangle of area 2, 
and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your 
program should output 2. The coordinates will all be integers. If there's no overlap 
between the two rectangles return 0. */

function overlappingRectangles(strArr) {
	// first convert strArr to arr of each coordinate
	strArr = strArr.split('),');
	// Then clean up each item in array
	var numArr = [];
	for (var idx = 0; idx < strArr.length; idx++) {
		var temp = '';
		var item = strArr[idx];
		for (var i = 0; i < item.length; i++) {
			if(item[i] !== '(' && item[i] !== ')') {
				temp += item[i];
			}
		}
		numArr.push(temp);
		numArr[numArr.length-1] = numArr[numArr.length-1].split(',');
	}
	var yCoords = numArr.map(function(curr) {
		return parseInt(curr[1]);
	});
	var xCoords = numArr.map(function(curr) {
		return parseInt(curr[0]);
	});
	console.log(yCoords, xCoords);
	var rectOneYCoords = [];
	for (var y=0; y < 4; y++) {
		rectOneYCoords.push(yCoords[y]);
	}
	var rectOneXCoords = [];
	for (var x=0; x < 4; x++) {
		rectOneXCoords.push(xCoords[x]);
	}
	var rectTwoYCoords = [];
	for (var y=4; y < yCoords.length; y++) {
		rectTwoYCoords.push(yCoords[y]);
	}
	var rectTwoXCoords = [];
	for (var x=4; x < xCoords.length; x++) {
		rectTwoXCoords.push(xCoords[x]);
	}
	
	var topLineRectOne = Math.max.apply(Math,rectOneYCoords);
	var bottomLineRectOne = Math.min.apply(Math,rectOneYCoords);
	var leftLineRectOne = Math.min.apply(Math,rectOneXCoords);
	var rightLineRectOne = Math.max.apply(Math, rectOneXCoords);
	console.log('topLineRectOne ', topLineRectOne, 'bottomLineRectOne ', bottomLineRectOne);
	console.log('leftLineRectOne ', leftLineRectOne, 'rightLineRectOne ', rightLineRectOne);

	var topLineRectTwo = Math.max.apply(Math,rectTwoYCoords);
	var bottomLineRectTwo = Math.min.apply(Math,rectTwoYCoords);
	var leftLineRectTwo = Math.min.apply(Math,rectTwoXCoords);
	var rightLineRectTwo = Math.max.apply(Math, rectTwoXCoords);
	console.log('topLineRectTwo ', topLineRectTwo, 'bottomLineRectTwo ', bottomLineRectTwo);
	console.log('leftLineRectTwo ', leftLineRectTwo, 'rightLineRectTwo ', rightLineRectTwo);

	var verticalOverlap = 0;
	var horizontalOverlap = 0;
	if (topLineRectOne >= bottomLineRectTwo && topLineRectOne <= topLineRectTwo) {
		verticalOverlap += Math.abs(topLineRectOne - bottomLineRectTwo);
	}
	if (bottomLineRectOne !== topLineRectTwo && bottomLineRectOne !== bottomLineRectTwo) {
		if (bottomLineRectOne <= topLineRectTwo && bottomLineRectOne >= bottomLineRectTwo) {
			verticalOverlap += Math.abs(bottomLineRectOne - topLineRectTwo);
		}
	}

	if (leftLineRectOne >= leftLineRectTwo && leftLineRectOne <= rightLineRectTwo) {
		horizontalOverlap += Math.abs(leftLineRectOne - rightLineRectTwo);
	}
	if (rightLineRectOne !== leftLineRectTwo && rightLineRectOne !== rightLineRectTwo) {
		if (rightLineRectOne >= leftLineRectTwo && rightLineRectOne <= rightLineRectTwo) {
			horizontalOverlap += Math.abs(rightLineRectOne - leftLineRectTwo);
		}
	}
	console.log('verticalOverlap ', verticalOverlap);
	console.log('horizontalOverlap ', horizontalOverlap);
	var overlapArea = verticalOverlap * horizontalOverlap;
	if (overlapArea === 0) return 0;

	// Find area of rectangle 1
	var rectOneArea = Math.abs((Math.max.apply(Math,rectOneYCoords) - Math.min.apply(Math,rectOneYCoords)) * 
		(Math.max.apply(Math,rectOneXCoords) - Math.min.apply(Math,rectOneXCoords)));
	
	return Math.floor(rectOneArea / overlapArea);
}



