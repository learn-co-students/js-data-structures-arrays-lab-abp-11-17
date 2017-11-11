const drivers = ["Milo", "Otis", "Garfield" ];


function destructivelyAppendDriver(){

    drivers.push('Ralph');

;}

function destructivelyPrependDriver(){
  drivers.unshift('Bob');
};

function destructivelyRemoveLastDriver(){
  drivers.pop('Garfield');
};
function destructivelyRemoveFirstDriver(){
  drivers.shift('Milo');
};



function appendDriver(){
   const newArray = [...drivers,];

  newArray.push('Broom' );

  return newArray;
};

function prependDriver(){
   const newArrayTwo = [ ...drivers];

   newArrayTwo.unshift('Arnold');

   return newArrayTwo;
};
function removeLastDriver(){
  const newArrayThree = [...drivers];

newArrayThree.pop(3);

return newArrayThree;

};
function removeFirstDriver(){
  const newArrayFour = [...drivers];

newArrayFour.shift(0);

return newArrayFour;
}
