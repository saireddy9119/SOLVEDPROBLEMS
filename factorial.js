//Implement a recursive function to calculate the factorial of a number.

function factorial(n) {
    // BASE: FACTORIAL OF 0 OR 1 IS 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // RECURSIVE CASE
    return n * factorial(n - 1);
}


const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`); // OUTPUT: FACTORIAL OF 5 IS 120
