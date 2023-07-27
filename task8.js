// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallest(x) {
    if (x.length < 2) return 0;

    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;

    for (let i = 0; i < x.length; i++) {
        let current = x[i];
        if (current < first) {
            second = first;
            first = current;
        } else if (current < second && current !== first) {
            second = current;
        }
    }
    return second;
}
console.log(secondSmallest([6, 3, 4, 8, 4, 5]));
// output 4