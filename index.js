// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name) {
  let moreDrivers = drivers.slice();
    moreDrivers.push(name);
    return moreDrivers;
}

function prependDriver(name) {
  let moreDrivers = drivers.slice();
    moreDrivers.unshift(name);
    return moreDrivers;
}

function removeLastDriver(){
  let moreDrivers = drivers.slice(0, drivers.length - 1);
  return moreDrivers;
}

function removeFirstDriver() {
  let moreDrivers = drivers.slice(1);
  return moreDrivers;
}
