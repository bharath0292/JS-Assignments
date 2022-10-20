/* 1. Can we put duplicate values in the set object ? */
console.log("No")


/*2. Write the syntax for
    a) Creating new set object
    b) Adding new element to set object
    c) Deleting element from set object */

        // Create a Set
    const letters = new Set();

    // Add Values to the Set
    letters.add("a");
    letters.add("b");
    letters.add("c");

    console.log(letters)

    letters.delete("a")
    console.log(letters)


/* 3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods. */

    const numbers = new Set();
    numbers.add(Math.round(Math.random()*11))
    numbers.add(Math.round(Math.random()*11))
    numbers.add(Math.round(Math.random()*11))
    numbers.add(Math.round(Math.random()*11))

    console.log(numbers.has(8))