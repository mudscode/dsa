class Human {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  whatDoYouDo(profession) {
    console.log(`I'm a ${profession}.`);
  }
}

const mudassir = new Human("Mudassir", "Pakistan");

console.log(mudassir.whatDoYouDo("Software Engineer"));

function Person(name, country) {
  return {
    name: name,
    country: country,
    know: function () {
      console.log(`My name is ${this.name} and I'm from ${this.country}.`);
    },
  };
}

const person1 = Person("Mudassir", "Pakistan");

person1.know();

function People(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
  this.introduceYourself = function () {
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
  };
}

const people1 = new People("Mudassir", 18);
const people2 = new People("Huazif", 16);

people1.constructor;
// people1.name;
// people1.age;
// people1.introduceYourself();

// people2.name;
// people2.age;
// people2.introduceYourself();
