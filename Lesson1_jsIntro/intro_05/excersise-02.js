// Prompt the user to enter their first name and store the value in the variable usersFirstName
const usersFirstName = prompt('Enter first name');

// Prompt the user to enter their last name and store the value in the variable usersLastName
const usersLastName = prompt('Enter last name');

// Prompt the user to enter their age and store the value in the variable usersAge
const usersAge = prompt('Enter age');

// Prompt the user to enter their greeting and store the value in the variable userGreeting
const userGreeting = prompt('Enter your greeting');

// Create an object called user with properties firstName, lastName, userAge, and greeting,
// and assign the corresponding values from the variables
const user = {
  firstName: usersFirstName,
  lastName: usersLastName,
  userAge: usersAge,
  greeting: userGreeting,

  // Define a method called sayHello for the user object
  sayHello() {
    console.log(this.greeting + ' says ' + this.firstName);
  },
};

// Output the user object to the console
console.log(user);

// Invoke the sayHello method of the user object
user.sayHello();
