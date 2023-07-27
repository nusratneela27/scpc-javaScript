// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverse(str) {
    return str.split('').reverse().join('')
}
console.log(reverse('hello world'));

// ans "dlrow olleh"