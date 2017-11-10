// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const a = drivers.slice();
  a.push(name);
  return a;
}

function prependDriver(name) {
  const a = drivers.slice();
  a.unshift(name);
  return a;
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1,);
}
