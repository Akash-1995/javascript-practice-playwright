class Car {
    constructor(name, model, year) {
      this.name = name;
      this.model = model;
      this.year = year;
    }
  
    print() {
      console.log(`My car name is ${this.name}, it's a ${this.model}, and it was manufactured in the year ${this.year}.`);
    }
  }
  
  let detail = new Car('Alcazar', 'TopVariant', 2024);
  detail.print();
  