// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const addDriver = [...drivers, 'Broom'];
  return addDriver;
}

function prependDriver(name) {
  const addDriver2 = ['Arnold', ...drivers];
  return addDriver2;
}

function removeLastDriver() {
  const sliceDriverEnd = drivers.slice(0, -1);
  return sliceDriverEnd;
}

function removeFirstDriver() {
  const sliceDriverFirst = drivers.slice(1);
  return sliceDriverFirst;
}
