// Write your solution here!
const drivers = ['Milo','Otis','Garfield'];

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver (name) {
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver (name) {
  drivers.shift(name);
}

function appendDriver (name) {
  appendDriver = [...drivers, name];
  return appendDriver;
}

function prependDriver (name) {
  prependDriver = [name, ...drivers];
  return prependDriver;
}

function removeLastDriver () {
  removeLastDriver = drivers.slice(0,2);
  return removeLastDriver;
}

function removeFirstDriver () {
  removeFirstDriver = drivers.slice(1);
  return removeFirstDriver;
}
