function equilibriumIndex(arr) {

    var sumGoingUp = 0;
    var totalSum = 0;
    // Get total of all elements of array
    totalSum = arr.reduce(function(prev, curr) {
        return prev + curr 
    });
    // Go through each element of the array and compare 
    // sum going up the array to the total sum. Note that 
    // at iteration we increase the sum going up by adding the 
    // current element, and reduce the total sum by subtracing 
    // the current element. If never match return -1.
    for (var i = 0; i < arr.length; i++) {
        totalSum -= arr[i];
        if (totalSum === sumGoingUp) {
            return i;
        }
        sumGoingUp += arr[i];
    }
    return -1;
};