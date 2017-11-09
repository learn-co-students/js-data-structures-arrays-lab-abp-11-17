// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph")
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop("Garfield")
}

function destructivelyRemoveFirstDriver() {
  drivers.shift("Milo")
}

function appendDriver() {
  let newArray = drivers.slice();
  newArray.push("Broom");
  return newArray;
}

function prependDriver() {
  let newArray = drivers.slice();
  newArray.unshift("Arnold");
  return newArray;
}

function removeLastDriver() {
  let newArray = drivers.slice();
  newArray.pop();
  return newArray;
}

function removeFirstDriver() {
  let newArray = drivers.slice();
  newArray.shift();
  return newArray;
}
