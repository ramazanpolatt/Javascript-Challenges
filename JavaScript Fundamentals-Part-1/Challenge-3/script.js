const dolphinAverageScore = (97 + 112 + 80) / 3;
const koalasAverageScore = (109, 95, 106) / 3;

if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100) {
  console.log(
    `Winner is the dolphins with the average score of ${dolphinAverageScore}`
  );
} else if (
  koalasAverageScore > dolphinAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(
    `Winner is the koalas with the average score of ${koalasAverageScore}`
  );
} else if (
  koalasAverageScore === dolphinAverageScore &&  koalasAverageScore >= 100 &&  dolphinAverageScore >= 100
) {
  console.log(
    `There is no winner with dolphing average is ${dolphinAverageScore} and koalas average is ${koalasAverageScore}`
  );
}
