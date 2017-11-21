const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver() {
copyDrivers = drivers.slice(0);
copyDrivers.push('Broom');
return copyDrivers;
}

function prependDriver() {
  bonusDrivers = drivers.slice(0);
  bonusDrivers.unshift('Arnold');
  return bonusDrivers;
}

function removeLastDriver() {
  removedDriver = drivers.slice(0);
  removedDriver.pop();
  return removedDriver;
}

function removeFirstDriver() {
  removedOne = drivers.slice(0);
  removedOne.shift();
  return removedOne;
}