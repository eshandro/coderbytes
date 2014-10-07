function passingCars(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    if (A.length <2) return 0;
    var i = 0;
    var count = 0;
    for (i; i < A.length; i++) {
        if (A[i] === 0) {
            var j = A.length-1;
            while (j > i) {
                if (A[j] === 1) count++;
                j--;
            }
        }
        if (A[i] === 1) {
            var j = 0;
            while (j < i) {
                if (A[j] === 0) count++;
                j++;
            }
        }
        console.log('i is ', i, ' and count is ', count);
        if (count > 2000000000) return -1;
        if (count === 0 && i === 0) return 0;
    }
    return count/2;
}