// Create an array called `people` with initial elements: 'Greg', 'Mary', 'Devon', 'James'
const people = ['Greg', 'Mary', 'Devon', 'James'];

// Initialize a counter variable `i` to 0
let i = 0;

// Iterate through the `people` array using a while loop
while (i < people.length) {
    // Output the current element
    console.log(people[i]);

    // Check if the current element is 'Mary'
    if (people[i] === 'Mary') {
        // If so, exit the loop using the break statement
        break;
    }

    // Increment the counter `i` to move to the next element
    i++;
}

// Create a copy of the `people` array using the slice() method
const peopleCopy = people.slice();

// Find the index of 'Mary' in the `people` array using indexOf()
const maryIndex = people.indexOf('Mary');

// Find the index of 'Foo' in the `people` array using indexOf()
const fooIndex = people.indexOf('Foo');

// Output the index of 'Foo' to the console
console.log(fooIndex); // Output: -1
