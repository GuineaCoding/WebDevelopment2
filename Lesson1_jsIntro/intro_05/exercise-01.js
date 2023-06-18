// Prompt the user to enter their first name and store the value in the variable usersFirstName
const usersFirstName = prompt('Enter first name');

// Prompt the user to enter their last name and store the value in the variable usersLastName
const usersLastName = prompt('Enter last name');

// Prompt the user to enter their age and store the value in the variable usersAge
const usersAge = prompt('Enter age');

// Create an object called user with properties firstName, lastName, and userAge,
// and assign the corresponding values from the variables
const user = {
  firstName: usersFirstName,
  lastName: usersLastName,
  userAge: usersAge,
};

// Output the user object to the console
console.log(user);
