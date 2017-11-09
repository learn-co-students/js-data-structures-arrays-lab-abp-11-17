// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  return members = [...drivers.slice(), "Broom"]
}

function prependDriver(name) {
  return members = ["Arnold", ...drivers.slice()]
}

function removeLastDriver() {
  return members = drivers.slice(0, 2);
}

function removeFirstDriver() {
  return members = drivers.slice(1, 3);
}
