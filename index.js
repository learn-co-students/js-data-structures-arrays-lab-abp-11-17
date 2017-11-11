const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop(-1)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  appendDriver = [ ...drivers, name]
  return appendDriver
}

function prependDriver(name) {
  prependDriver = [name, ...drivers]
  return prependDriver
}

function removeLastDriver() {
  removeLastDriver = drivers.slice(0,-1)
  return removeLastDriver
}

function removeFirstDriver() {
  removeFirstDriver = drivers.slice(1)
  return removeFirstDriver
}
