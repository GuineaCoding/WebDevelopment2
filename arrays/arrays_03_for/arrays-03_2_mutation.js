// Create an array called `people` with initial elements: 'Greg', 'Mary', 'Devon', 'James'
const people = ['Greg', 'Mary', 'Devon', 'James'];

// Iterate over the `people` array using a for loop
for (let i = 0; i < people.length; i++) {
    // Check if the current element is 'Greg' or 'James'
    if (people[i] === 'Greg' || people[i] === 'James') {
        // remove the element at index i from the `people` array
        people.splice(i, 1);
        // Decrement i to adjust for the removed element
        i--;
    }
}

// Add 'Andrian' to the end array
people.push('Andrian');

// Add 'Mat' as the first element of the array
people.unshift('Mat');

console.log(people);
