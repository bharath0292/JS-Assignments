/** 1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec... */

const trunc = (word) => word.length > 4 ? `${word.substring(0,4)}....` : word
console.log(trunc("Icecream"))

/**2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy” */

var input = "Hii Boy"
console.log(input.replace(/ /g,''))

/**3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii” */

var input = "Hii Boy"
console.log(input.split(" ").reverse().join(" "));

/**4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple” */
var input = 'apple';
const regex = /a/i;
console.log(input.replace(regex, 'x'));

/**5. What string method can be used to convert string into array ? */
console.log("split")

/* What string method can be used to check the occurrence of a specified
text in a string? */
console.log("search")

/* How can you break a string to a newline in Javascript ? */
console.log("\n")

/**8. Write a Javascript function to test whether the first character of a string
is lowercase. */
function firstIsLowercase(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }
  
    if (str[0].toUpperCase() === str[0]) {
      return false;
    }
  
    return true;
  }
  
console.log(firstIsLowercase('Hello'));
console.log(firstIsLowercase('world'));


/**9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ? */
console.log("Either change all strings to uppercase or lowercase")

/**10. Given a String S, achieve following tasks
        a) Convert the String into upper case.
        b) Convert only the first character to uppercase.

        c) Convert the String into lower case.
        d) Break the string into two halves and swap them.
        e) Count the repeating characters.
        f) Reverse the string */

var input = "hello world"
console.log(input.toUpperCase())

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)
console.log(capitalize(input))

console.log(input.toLowerCase())

function duplicateCharCount(str) {
		
	if(str) {
		var obj = {};
		for(let i = 0; i < str.length; i++) {
			if(obj[str[i]]){
				obj[str[i]] += obj[str[i]];
			}else {
				obj[str[i]] = 1;
			}
		}
		console.log(obj);
	}
			
}

  
duplicateCharCount(input);

function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(input))
