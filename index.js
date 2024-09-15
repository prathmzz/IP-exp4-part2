class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Regular method to print details
    printDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  
    // Arrow function as a member function
    printDetailsArrow = () => {
      console.log(`(Arrow Function) Name: ${this.name}, Age: ${this.age}`);
    }
  
    // Static method (non-member, doesn't belong to the instance)
    static greet() {
      console.log("Hello! This is a static method.");
    }
  }
  
  // Create a Person object
  const person1 = new Person("Prathamesh Palve", 21);
  
  // Call methods
  person1.printDetails(); // Regular method
  person1.printDetailsArrow(); // Arrow function as a member function
  
  // Call static method
  Person.greet(); // Static method
  