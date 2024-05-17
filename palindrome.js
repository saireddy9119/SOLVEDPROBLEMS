// Implement a function to check if a given string is a palindrome.
function isPalindrome(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;

}
console.log(isPalindrome("aiia")); // true 
console.log(isPalindrome("aioa")); // false
