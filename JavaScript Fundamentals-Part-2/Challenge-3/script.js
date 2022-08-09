const person1 = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

person1.calcBMI() > person2.calcBMI()
  ? console.log(
      `${person1.firstName} BMI (${person1.BMI}) is higher than ${person2.firstName}'s (${person2.BMI} !) `
    )
  : console.log(
      `${person2.firstName} BMI (${person2.BMI}) is higher than ${person1.firstName}'s (${person1.BMI} !) `
    );
