// Function that uses call
function addNumbers(a, b) {
  return this.x + a + b;
}

const obj = { x: 10 };
console.log(addNumbers.call(obj, 5, 7));




// Function that uses bind
function greetPerson(greeting) {
  return `${greeting} ${this.personName}`;
}

const obj2 = { personName: "John" }

const boundGreet = greetPerson.bind(obj2);
console.log(boundGreet("Hello")); 




// Function that uses apply

function appluNumber(a, b, c, d) {
    return this.y + a + b + c + d;
  }
  
  const add = { y: 2 };
  const sum = [10,20,30,40]
  console.log(appluNumber.apply(add, sum));