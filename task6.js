// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateP(length) {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i < length; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);

        if (pass.length <= length) {
            pass += str.charAt(char)
        }
    }

    return pass;
}
console.log(generateP(5));
// output $kVt