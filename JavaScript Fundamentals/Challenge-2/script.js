const markWeight = 78,
  johnWeight = 95;
const markHeight = 1.69,
  johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's !`);
  console.log(`Marks BMI ${markBMI} is higher than ${johnBMI} `);
} else {
  console.log(`John's BMI is higher than Marks's !`);
  console.log(`John's BMI ${johnBMI} is higher than ${markBMI}`);
}
