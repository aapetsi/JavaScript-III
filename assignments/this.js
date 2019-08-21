/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Within the global scope, the value of "this" refers to the window or console object.
* 2. Whenever we call a function on an object, the preceeding object before the dot refers to "this".
* 3. Inside objects or a constructor function, this refers to the object itself. With regard to the constructor function, it is invoked with the use of the "new" keyword.
* 4. When we use the call or apply method, we are explicitly defining "this"
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var globalThis = "Some information";
console.log(window.globalThis)

// Principle 2

// code example for Implicit Binding
function sleep() {
  return this;
}

var person = {
  name: "Apetsi",
  age: 28,
  sleep: sleep,
}

person.sleep()

var vehicle = {
  name: "Abc",
  model: "asdf",
  make: "4444444444444444",
  print: function () {
    return `${this.name}, ${this.model}, ${this.make}`
  }
}

console.log(vehicle.print())

// Principle 3

// code example for New Binding

function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

var myPerson = new Person("Apetsi", 28, "Accra")
console.log(myPerson)

// Principle 4

// code example for Explicit Binding

function speak(word) {
  console.log(this);
  return `My word is ${word}`
}

speak.call("meat", 35)
speak.apply("bread", ["apple"])