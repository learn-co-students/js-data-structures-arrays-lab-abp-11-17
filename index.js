
const drivers = ["Milo", "Otis", "Garfield"]// Write your solution here!
function destructivelyAppendDriver(name){
   drivers.push(name);
}
destructivelyAppendDriver('ralph');

function destructivelyPrependDriver(name) {
   drivers.unshift(name);
}
destructivelyPrependDriver("Bob");

function destructivelyRemoveLastDriver(){
    drivers.pop();
}
destructivelyRemoveLastDriver();

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}
destructivelyRemoveFirstDriver();

function appendDriver(name){
  const driver = name
  return [...drivers, driver]
}

function prependDriver(name){
  const driver = name
  return [driver, ...drivers]
}

function removeLastDriver(){

  return drivers.slice(0,2)
}
function removeFirstDriver(){

  return drivers.slice(1,3)
}
