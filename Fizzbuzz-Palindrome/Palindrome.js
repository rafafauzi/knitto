function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
