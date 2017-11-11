// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(name){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift();
}

function appendDriver(name){
  var newDrivers = [...drivers];
  newDrivers.push('Broom');
  return newDrivers;
}

function prependDriver(name){
  var newDrivers = [...drivers];
  newDrivers.unshift('Arnold');
  return newDrivers;
}

function removeLastDriver(name){
  var newDrivers = [...drivers];
  newDrivers.pop();
  return newDrivers;
}

function removeFirstDriver(name){
  var newDrivers = [...drivers];
  newDrivers.shift();
  return newDrivers;
}
