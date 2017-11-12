// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}
function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
  return drivers;
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
  return drivers;
}
function appendDriver(name){
  let newDrivers = [...drivers, name];
  return newDrivers;
}
function prependDriver(name){
  let newDrivers = [name, ...drivers];
  return newDrivers;
}
function removeLastDriver(){
  return drivers.slice(0, -1);
}
function removeFirstDriver(){
  return drivers.slice(1);
}
