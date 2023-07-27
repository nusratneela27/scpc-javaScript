// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const values = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10]
    /*....*/
]);

function romanToInt(string) {
    let result = 0,
        current, previous = 0;
    for (const char of string.split("").reverse()) {
        current = values.get(char);
        if (current >= previous) {
            result += current;
        } else {
            result -= current;
        }
        previous = current;
    }
    return result;
}

console.log(romanToInt('VIII'));
// output 8