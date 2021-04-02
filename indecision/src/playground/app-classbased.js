class Indecision {
  constructor(name = "hey") {
    this.name = name;
  }

  showMyName() {
    return `${this.name}`;
  }
}

const itsMe = new Indecision("Mk");
const itsMeAgain = new Indecision();

// itsMe.showMyName();
// itsMeAgain.showMyName();

class Student extends Indecision {
  constructor(name, age) {
    super();
    this.age = age;
  }

  showMyAge() {
    console.log(`showMyAge: ${this.age}`);
  }

  showMyName() {
    let name = super.showMyName();
    console.log(`Showing My Name: ${name} is this`);
  }
}

const studA = new Student("Lion", 31);

studA.showMyName();
// studA.showMyAge();
// console.log(studA);
