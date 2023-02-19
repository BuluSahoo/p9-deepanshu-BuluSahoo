//using class method

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Teacher extends Person {
    teach(subject) {
      console.log(`${this.name} is now ${this.age} year old and teaching ${subject}`);
    }
  }
  

  const teacher = new Teacher ("Bulu", 25);
  teacher.teach("Math")


  // using funtion method

//   function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   function Teacher(name, age) {
//     Person.call(this, name, age);
//   }
  
//   Teacher.prototype = Object.create(Person.prototype);
//   Teacher.prototype.constructor = Teacher;
  
//   Teacher.prototype.teach = function(subject) {
//     console.log(`${this.name} is now ${this.age} year old and teaching ${subject}`);;
//   };
  

//   const teacher = new Teacher ("Bulu", 25);
//   teacher.teach("Math")