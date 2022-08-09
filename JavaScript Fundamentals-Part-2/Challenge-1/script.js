'use strict'


const calculateAverage =  (score1,score2,score3) => (score1+score2+score3)/3;

const dolphinsAverage=calculateAverage(44,23,71);
const koalasAverage=calculateAverage(65,54,49);

const checkWinner= function ( avgDolphins,avgKoalas)
{

  if(avgKoalas>=2*avgDolphins)
  {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins} Dolphins`);
  }
  else if (avgDolphins>2*avgKoalas)
  {

    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas} Koalas`);


  }
  else{

    console.log(`No winner with Dolpins avg score ${avgDolphins} and Koalas  avg score ${avgKoalas} `);
  }

}


checkWinner(dolphinsAverage,koalasAverage);


