/* 1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10 */
function pattern() {
    let string = "";
    let count = 1;
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            string += count;
            count++;
        }
        string += "\n";
    }
    console.log(string);
}
pattern()

/* 2. Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153 */

function armstrong(number) {
    let sum = 0;
    let temp = number;

    while (temp > 0) {
        let remainder = temp % 10;

        sum += remainder * remainder * remainder;

        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        return (`${number} is an Armstrong number`);
    }
    else {
        return (`${number} is not an Armstrong number.`);
    }
}

console.log(armstrong(153))

/* 3. Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145 */

function specialNumber(number){
    
    const factorial = (number) =>{
        let fact = 1
        for(i=1; i<=number; i++){fact *= i}
        return fact
    }   
    
    var num = 0
    
    for (let i of String(number)) num += factorial(i);
    const result = num == number ? "True" : "False";
    
    return result
}
console.log(specialNumber(144))
