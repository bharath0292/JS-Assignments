// 1. Write a program to find whether a given year is a leap year or not.
function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
var year = 2000
checkLeapYear(year);

// 2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.
function celciusTOfahrenheit(celcius){
    var fahrenheit = ((celcius*9)/5)+32
    console.log(fahrenheit)
}
var celcius = 60
celciusTOfahrenheit(celcius)

function fahrenheitTOcelcius(fahrenheit){
    var celcius = (fahrenheit - 32) * 5 / 9;
    console.log(celcius)
}
var fahrenheit = 45
fahrenheitTOcelcius(fahrenheit)

// 3. Write a program to find the factorial of a number.
function factorial(number){
        if (typeof(number) === "string"){
            result = "Input is tring. Please provide a number";
        }
        if (typeof(number) === "number"){
            if (number < 0 )
                result = "No factorial for negative number"
            else if (number === 0) 
                    result =  1
            else{
                let fact = 1
                for(i=1; i<=number; i++){fact *= i}
                result = fact
            }
        }
        return result
    }
const fact = factorial(1)
console.log(fact)