// Create an object named ned with properties firstName, lastName, and age
const ned = {
  firstName: 'Homer',
  lastName: 'Simpson',
  age: 45,
  
  // Define a method called hello for the ned object
  hello() {
    // Output a message to the console using the firstName property of ned
    console.log('I want beer ' + this.firstName);
    console.log('I want donuts ' + this.firstName);
    console.log('I want pizza ' + this.firstName);
  }
}

// Invoke the hello method of the ned object, which logs messages to the console
ned.hello();
