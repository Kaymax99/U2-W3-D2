//----------------- Esercizio 1 -----------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static whoIsOlder(person1, person2) {
    if (person1.age > person2.age) {
      console.log(person1.name + "è più grande di" + person2.name);
    } else if (person2.age > person1.age) {
      console.log(person2.name, "è più grande di", person1.name);
    } else {
      console.log(person1.name, "e", person2.name, "hanno la stessa età");
    }
  }
}

let personeACaso = [new Person("Alberto", "24"), new Person("Emanuele", "27")];

Person.whoIsOlder(personeACaso[0], personeACaso[1]);
