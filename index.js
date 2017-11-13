// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
  name = drivers.push(name);
}

function destructivelyPrependDriver(name){
  name = drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  name = drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  name = drivers.shift(name);
}
function appendDriver(name) {
 return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeFirstDriver(name) {
  return drivers.slice(1);
}

function removeLastDriver(name) {
  return drivers.slice(0, drivers.length-1);
}
