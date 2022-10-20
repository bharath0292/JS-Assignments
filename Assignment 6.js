/**1 ) Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
    1. Add an area() method to the Rectangle class.
    2. Create a Square class that satisfies the following conditions:
    ○ It is a subclass of Rectangle.
    ○ It contains a constructor and no other methods.
    ○ It can use the Rectangle class' area method to print the area
    of a Square object. */

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length*this.width 
    }
    }

    class Square extends Rectangle {
        constructor(side) {
            super(side, side);
        }
    }
    
let a = new Square(3)
console.log(a.area())


/** 2) Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.*/

function find_largest(arr, n){
    const uniqueChars = [...new Set(arr)];
    
    return uniqueChars.sort(function(a,b){return b-a})[n-1];
}

console.log(find_largest([3,45,6,7,23,5,7,8], 1))

/** 3) Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8. */

function insertHyphen(str) {
    var strArr = str.split('');
    var numArr = strArr.map(Number);
      for(var i = 0; i < numArr.length; i++) {
        if(numArr[i-1]%2===0 && numArr[i]%2===0) {
          numArr.splice(i, 0, '-');
        }
      }
    return numArr.join('');
  }
  console.log(insertHyphen('025468'));