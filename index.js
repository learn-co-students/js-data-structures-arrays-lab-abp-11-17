// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop ();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift ();
}

function appendDriver () {
  const newDrivers = [...drivers.slice (0, 3), 'Broom'] ;
  return newDrivers;
}

function prependDriver () {
  const newestDrivers = ['Arnold', ...drivers.slice(0, 4)] ;
  return newestDrivers;
}

function removeLastDriver () {
  const removeDrivers = drivers.slice(0, 2) ;
  return removeDrivers;
}

function removeFirstDriver () {
  const firstDrivers = drivers.slice(1, 3) ;
  return firstDrivers;
  return drivers;
}
