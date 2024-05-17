function isPalindrome(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;

}
console.log(isPalindrome("aioa")); // true 
console.log(isPalindrome(9119)); // false
