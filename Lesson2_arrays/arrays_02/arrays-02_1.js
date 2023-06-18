// Create an empty array called `me`
const me = [];

// Add 'Andrian' as the first element of the `me` array
me[0] = 'Andrian';

// Add 'Barbulat' to the end of the `me` array
me.push('Barbulat');

// Add 'Silver' as the first element of the `me` array
me.unshift('Silver');

// Remove the first element of the `me` array
me.shift();

// Create an empty array called `other`
const other = [];

// Add '20' as the first element of the `other` array
other[0] = '20';

// Add 'Javascript' to the end of the `other` array
other.push('Javascript');

// Output the `me` array, which should contain ['Andrian', 'Barbulat']
console.log(me);

// Output the `other` array, which should contain ['20', 'Javascript']
console.log(other);
