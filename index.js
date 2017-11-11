// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

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
  const allDrivers = [...drivers, 'Broom'];
  return allDrivers;
}

function prependDriver(name) {
  const moreDrivers = ['Arnold', ...drivers];
  return moreDrivers;
}

function removeLastDriver() {
  const lessDrivers = drivers.slice(0, drivers.length - 1);
  return lessDrivers;
}

function removeFirstDriver() {
  const minusFirstDriver = drivers.slice(1);
  return minusFirstDriver;
}
