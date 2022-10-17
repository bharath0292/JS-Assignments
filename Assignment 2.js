/* 1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene */
function checkTriangle(x,y,z){
    if(x===y && y===z) {
        result = "Equilateral Triangle";
    }
    else if(x===y || y===z || z===x){
        result = "Isosceles Triangle"
    }
    else{
        result = "Scalene Triangle"
    }
    return result
}
var res = checkTriangle(8,6,7)
console.log(res)


/* 2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”. */
function grade(mark){
    var grade = ""
    switch (true) {
        case mark>90 && mark<=100:
          grade = "S";
          break;
        case mark>80 && mark<=90:
          grade = "A";
          break;
        case mark>70 && mark<=80:
           grade = "B";
          break;
        case mark>60 && mark<=70:
          grade = "C";
          break;
        case mark>50 && mark<=60:
          grade = "D";
          break;
        case mark>40 && mark<=50:
          grade = "E";
          break;
        case mark<=40:
          grade = "Failed";
      }
    return grade
}

console.log(grade(41))




/* 3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000 */
function multiples(){
    var sum = 0
    for (var x = 0; x < 1000; x++)
    {
        if (x % 3 === 0 || x % 5 === 0)
        {
           sum += x;
        }
    }
    return sum    
}

console.log(multiples())


/* 4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100). */
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

function prime(start_num, end_num){
    const list = []

    for (let i = start_num; i <= end_num; i++) {
        let flag = 0;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        if (i > 1 && flag == 0) {
            list.push(factorial(i));
        }
    }
    return list
}
console.log(prime(0,100))
