// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  return drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift();
}

function appendDriver(name) {
  let someDrivers = [...drivers, name];
  return someDrivers;
}

function prependDriver(name) {
  let firstDrivers = [name, ...drivers];
  return firstDrivers;
}

function removeLastDriver() {
  let lostDrivers = drivers.slice(0, -1);
  return lostDrivers;
}

function removeFirstDriver() {
  let hiredDrivers = drivers.slice(1);
  return hiredDrivers;
}
