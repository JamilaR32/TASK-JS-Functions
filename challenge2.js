/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`greet (${name}) logs "Hello ${name}"`);
  // Your code here
}
greet("Ahmed");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
  // Your code here
}
console.log(isOdd(3));
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n - 1) / 2;
  }
  // Your code here
}
console.log(oddsSmallerThan(7));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 == 0) {
    return n * 2;
  } else {
    return n * n;
  }
  // Your code here
}
console.log(squareOrDouble(16));
// Your code here
