

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push("Ralph")
}

function destructivelyPrependDriver(driver) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift()
}

function appendDriver(driver) {
  return [...drivers, "Broom"]
}

function prependDriver(driver) {
  return ["Arnold", ...drivers];
}

function removeLastDriver(driver) {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(driver) {
  return drivers.slice(1);
}
