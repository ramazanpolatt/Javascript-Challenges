
const bill = 275;

const tipRate= (bill>=50 && bill<=300) ? 15 : 20;


const tip = bill*tipRate/100;

console.log(`The bill was ${bill},the tip was ${tip}, and the total value ${bill+tip}`);