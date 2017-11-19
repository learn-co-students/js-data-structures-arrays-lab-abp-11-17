// Write your solution here!
const  drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop("Garfield");
}

function destructivelyRemoveFirstDriver() {
  drivers.shift("Milo");
}

function appendDriver() {
  const appendDriver = [...drivers, "Broom"];
  return appendDriver;
}

function prependDriver() {
  const prependDriver = ["Arnold", ...drivers];
  return prependDriver;
}

function removeLastDriver() {
  const removeLastDriver = drivers.slice(0, 2);
  return removeLastDriver;
}

function removeFirstDriver() {
  const removeFirstDriver = drivers.slice(1, 3);
  return removeFirstDriver;
}
