// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
let newDrivers=[];
function destructivelyAppendDriver(name){
  return drivers.push(name);
}
function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  return drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  return drivers.shift();
}
function appendDriver(name){
  newDrivers=drivers.slice();
   newDrivers.push(name);
   return newDrivers;
}
function prependDriver(name){
  newDrivers=drivers.slice();
  newDrivers.unshift(name);
  return newDrivers;
}
function removeLastDriver(){
  newDrivers=drivers.slice();
  newDrivers.pop();
  return newDrivers;
}
function removeFirstDriver(){
  newDrivers=drivers.slice();
  newDrivers.shift();
  return newDrivers;
}
