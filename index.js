// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(name){
  let newDrivers = [...drivers]
  newDrivers.push(name)
return newDrivers
}

function prependDriver(name){
  let newDrivers = [...drivers]
  newDrivers.unshift(name)
  return newDrivers
}

function removeLastDriver(){
  let newDrivers = [...drivers]
  newDrivers.pop()
  return newDrivers
}
function removeFirstDriver(){
  let newDrivers = [...drivers]
  newDrivers.shift()
  return newDrivers
}
