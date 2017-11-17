// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph");
  console.log(drivers)
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
  console.log(drivers)
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  console.log(drivers)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  console.log(drivers)
}

function appendDriver() {
  const newDrivers = [...drivers, "Broom"];
  console.log(newDrivers)
  console.log(drivers)
  return newDrivers
}

function prependDriver() {
  const newNewDrivers = ["Arnold", ...drivers];
  console.log(newNewDrivers)
  console.log(drivers)
  return newNewDrivers
}

function removeLastDriver() {
const buttlessDrivers = drivers.slice(0,2);
return buttlessDrivers
}

function removeFirstDriver() {
  const headlessDrivers = drivers.slice(1);
  return headlessDrivers
}
