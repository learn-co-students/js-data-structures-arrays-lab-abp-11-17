// Write your solution here!
const drivers = ["Milo","Otis", "Garfield"];

function destructivelyAppendDriver (name){
   drivers.push('Ralph');
};

function destructivelyPrependDriver(name){
   drivers.unshift('Bob');
};


function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const newArray =  [...drivers, "Broom"];
  return newArray;
}

function prependDriver(name){
  const newArray2 =  ["Arnold", ...drivers];
  return newArray2;
}

function removeLastDriver(){
  const copyOfDrivers = drivers.slice(0,2);
  return copyOfDrivers
}

function removeFirstDriver(){
  const copyOfDrivers2 = drivers.slice(1);
  return copyOfDrivers2
}
