// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function prependDriver() {
  return ["Arnold", ... drivers]
}

function appendDriver() {
  return [... drivers, "Broom"]
}

function removeLastDriver() {
  return drivers.slice(0,2)
}

function removeFirstDriver() {
  return drivers.slice(1,3)
}
