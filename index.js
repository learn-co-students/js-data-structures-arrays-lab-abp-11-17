// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  const newarray = [...drivers, name]
  return newarray;
}

function prependDriver(name) {
  const newarray2 = [name, ...drivers]
  return newarray2;
}

function removeLastDriver() {
  const newarray3 = drivers.slice(0, drivers.length - 1)
  return newarray3;
}

function removeFirstDriver() {
  const newarray4 = drivers.slice(1)
  return newarray4
}
