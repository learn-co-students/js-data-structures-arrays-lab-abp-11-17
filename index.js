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

const newdrivers = [...drivers];
function appendDriver(name){
  newdrivers.push(name);
}

function prependDriver(name){
  drivers.unshift(name);
}

function removeLastDriver() {
  drivers.pop();
}
