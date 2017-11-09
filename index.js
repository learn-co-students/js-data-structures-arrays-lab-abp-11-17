// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}
function appendDriver(name){
  const copyDrivers=drivers.slice();
  copyDrivers.push(name);
  return copyDrivers;
}
function prependDriver(name){
  const copyDrivers2=drivers.slice();
  copyDrivers2.unshift(name);
  return copyDrivers2;
}
function removeLastDriver(){
  const copyDrivers3=drivers.slice();
  copyDrivers3.pop();
  return copyDrivers3;
}
function removeFirstDriver(){
  const copyDrivers4=drivers.slice();
  copyDrivers4.shift();
  return copyDrivers4;
}
