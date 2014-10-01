// Tie adjacent ropes to achieve the maximum number of ropes of length >= K.
function ropesCombine(K, A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var ropes = 0;
    var test = 0;
    var counter = 0;
    var i = 0;
    for (i; i < A.length; i++) {
        test += A[i];
        // console.log('test at i ', test, ' ', i);
        if (test >= K) {
            // console.log('A pre splice ', A);
            A.splice(i-counter, counter+1);
            // console.log('A post splice', A);
            counter = 0;
            test = 0;
            i = -1;
            ropes++;
            if (A.length === 0) return ropes;
        }
        else {
            counter++;
        }
    }
    return ropes;
}