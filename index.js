// Write your solution here!
const drivers = ["Milo","Otis","Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph")
  return drivers
};

function destructivelyPrependDriver(name){
  drivers.unshift("Bob")
  return drivers
};

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
  return drivers
};

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
  return drivers
};

function appendDriver(name) {
  return [...drivers, "Broom"];
};

function prependDriver(name) {
  return ["Arnold",...drivers];
};

function removeLastDriver(){
  return drivers.slice(0, drivers.length - 1);
};

function removeFirstDriver(){
  return drivers.slice(1);
}
