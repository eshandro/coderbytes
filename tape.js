// This was from a codility test. You break up an array into  2 parts to 
// discover the lowest number you can get for a difference between the sums 
// of the 2 parts. 



function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var compareArray = [];
    for (var i = 0; i < A.length-1; i ++) {
        // Get all #s in the first part
        var list1 = A.slice(0, i+1);
        // Get all the #s in the 2nd part
        var list2 = A.slice(i+1);
        // Use reduce() to total all numbers
        var total1 = list1.reduce(function(prev, curr) {
            return prev + curr;
        })
        console.log('total1: ', total1)
        // Use reduce() to total all numbers
        var total2 = list2.reduce(function(prev, curr) {
            return prev + curr;
        })
        // Push the absolute value of the difference between 
        // the total of each of the parts
        compareArray.push(Math.abs(total1-total2));
    }
    console.log('compareArray: ', compareArray)
    // Sort the compareArray by ascending
    var sortedList = compareArray.sort(function(a, b) {
        return a - b;
    });
    console.log('sortedList: ', sortedList)
    // the lowest number by using first number in the sortedlist
    return sortedList[0];
}