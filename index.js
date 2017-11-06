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

//const newarr = [...drivers];
function appendDriver(name){
  const newdriver = [...drivers, 'name'];
  //const newarr = drivers.concat(name);
}

function prependDriver(name){
  const newarr = [...drivers];
  newarr.unshift(name);
}

function removeLastDriver() {
  const newarr = [...drivers];
  newarr.pop();
}
const newarr = [...drivers];
function removeFirstDriver() {

  newarr.shift();
}
