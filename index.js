// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver(name) {
  return drivers.push('Ralph');
}
function destructivelyPrependDriver(name) {
  return drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver() {
  return drivers.pop();
}
function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}
function appendDriver() {
  const newDrivers = [...drivers, 'Broom'];
  return newDrivers;
}
function prependDriver() {
  const addedDrivers = ['Arnold', ...drivers];
  return addedDrivers;
}
function removeLastDriver() {
  const lastDriverRemoved = drivers.slice(0, drivers.length - 1);
  return lastDriverRemoved;
}
function removeFirstDriver() {
  const firstDriverRemoved = drivers.slice(1);
  return firstDriverRemoved;
}
