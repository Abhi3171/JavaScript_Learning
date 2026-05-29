/////////////// Number //////////////
console.log("Number");

const balance=new Number(4055); //balance is a Number object, not a primitive number
console.log(balance);

console.log(balance.toString()); //converts the Number object to a string
console.log(balance.valueOf()); //returns the primitive number value of the Number object
console.log(balance.toFixed(2)); //formats the number to 2 decimal places
console.log(balance.toExponential(2)); //formats the number in exponential notation with 2 decimal places
console.log(balance.toPrecision(3)); //formats the number to 4 significant digits
console.log(Number.isInteger(balance)); //checks if the balance is an integer
console.log(Number.isNaN(balance)); //checks if the balance is NaN (Not a Number)
console.log(Number.isFinite(balance)); //checks if the balance is a finite number
console.log(Number.parseInt("123.45")); //parses a string and returns an integer
console.log(Number.parseFloat("123.45")); //parses a string and returns a floating-point number

const check=1000000000;   
console.log(check.toLocaleString("en-US")); //formats the number according to the locale settings
console.log(check.toLocaleString("en-IN")); //formats the number according to the Indian locale settings
console.log(check.toLocaleString()); //formats the number according to the default locale settings of the environment (usually the user's locale)


/////////////// Math //////////////
console.log("Math");

console.log(Math.PI); //returns the value of PI
console.log(Math.E); //returns the value of Euler's number
console.log(Math.sqrt(16)); //returns the square root of 16
console.log(Math.pow(2, 3)); //returns 2 raised to the power of 3
console.log(Math.abs(-5)); //returns the absolute value of -5
console.log(Math.ceil(4.2)); //returns the smallest integer greater than or equal to 4.2
console.log(Math.floor(4.7)); //returns the largest integer less than or equal to 4.7
console.log(Math.round(4.5)); //returns the value of 4.5 rounded to the nearest integer
console.log(Math.max(1, 5, 3)); //returns the largest of the given numbers
console.log(Math.min(1, 5, 3)); //returns the smallest of the given numbers
console.log(Math.random()); //returns a random number between 0 (inclusive) and 1 (exclusive)   

// Example of using Math.random() to generate a random integer between 10 and 20
const min=10;
const max=20;
const randomInt=Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt); //returns a random integer between 10 and 20 (inclusive)    