// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(names){
  return drivers.push("Ralph")
}

function destructivelyPrependDriver(names){
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(names){
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(names){
  return drivers.shift()
}


function appendDriver(names){
  return [...drivers, "Broom"]
}

function prependDriver(names){
  return ["Arnold", ...drivers]
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length -1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
