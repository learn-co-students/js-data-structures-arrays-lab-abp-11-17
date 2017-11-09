// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (driver) {
  drivers.push(driver);
}

function destructivelyPrependDriver (driver) {
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver (driver) {
  return drivers.concat([driver]);
}

function prependDriver (driver) {
  return [driver].concat(drivers);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver () {
  return drivers.slice(1, drivers.length);
}
