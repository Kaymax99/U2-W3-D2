//----------------- Esercizio 1 -----------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static whoIsOlder(p1, p2) {
    if (p1.age > p2.age) {
      console.log(`${p1.name} è più grande di ${p2.name}`);
    } else if (p2.age > p1.age) {
      console.log(`${p2.name} è più grande di ${p1.name}`);
    } else {
      console.log(`${p1.name} e ${p1.name} hanno la stessa età`);
    }
  }
}

let personeACaso = [
  new Person("Aragorn", 64),
  new Person("Legolas", 271),
  new Person("Ghimli", 203),
];

Person.whoIsOlder(personeACaso[0], personeACaso[1]);
