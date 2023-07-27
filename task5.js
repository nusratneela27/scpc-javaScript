// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2
        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator. Please use '+', '-', '*', or '/'.";
    }
}

console.log(calculator(2, 3, "/"));
// output 5
