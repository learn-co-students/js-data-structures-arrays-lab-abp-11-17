// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(ralph) {
  drivers.push(ralph);
}

function destructivelyPrependDriver(bob) {
  drivers.unshift(bob);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(broom) {
  return [...drivers, broom];
}

function prependDriver(arnold) {
  return [arnold, ...drivers];
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
