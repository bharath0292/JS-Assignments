/* Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output
using the return statement.

examples-
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21
matchHouses(87) ➞ 436 */


function sticks(n) {
    if (n === 0) {
        return "Non zero"
    } else if (n < 0 || typeof n !== "number") {
        return "Non-negative numbers"
    } else {
        let a;
        a = (5 * n) + 1;
        return a;
    }
};

if (typeof window !== "undefined") {
    var number = window.prompt("Number of Steps");
    console.log(sticks(Number(number)))    // browser code
  }