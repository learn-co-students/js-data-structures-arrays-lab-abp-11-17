// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  return [...drivers, name]
}

function prependDriver(name) {
  return [name, ...drivers]
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
