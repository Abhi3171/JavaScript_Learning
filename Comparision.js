console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// Explanation:
// In JavaScript, when comparing null with a number using the greater than (>) operator,
// null is converted to 0. Therefore, null > 0 evaluates to false because 0 is not greater than 0.

console.log("2" === 2); // false
// Explanation:
// The strict equality operator (===) checks for both value and type. 
// In this case, "2" is a string and 2 is a number, so they are not strictly equal, resulting in false.
console.log("2" == 2); // true
// Explanation:
// The loose equality operator (==) performs type coercion before comparing values.
//  In this case, "2" is converted to the number 2, and since 2 is equal to 2, the result is true.
