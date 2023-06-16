let favoriteFoods = ['Pizza', 'Burger', 'Ice Cream'];

// Access the second element in favoriteFoods
let secondFavoriteFood = favoriteFoods[1];
console.log(secondFavoriteFood); // Output: Burger

// Change the last element in favoriteFoods
favoriteFoods[favoriteFoods.length - 1] = 'Sushi';
console.log(favoriteFoods); // Output: ['Pizza', 'Burger', 'Sushi']

// Remove the first element in favoriteFoods and store it in formerFavoriteFood
let formerFavoriteFood = favoriteFoods.shift();
console.log(formerFavoriteFood); // Output: Pizza
console.log(favoriteFoods); // Output: ['Burger', 'Sushi']

// Add a favorite food to the back of the favoriteFoods array
favoriteFoods.push('Pasta');
console.log(favoriteFoods); // Output: ['Burger', 'Sushi', 'Pasta']

// Add a favorite food to the front of the favoriteFoods array
favoriteFoods.unshift('Steak');
console.log(favoriteFoods); // Output: ['Steak', 'Burger', 'Sushi', 'Pasta']
