// Write your solution
const drivers=["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const newArray=drivers.slice();
  newArray.push(name);
  return newArray;
}
function prependDriver(name){
  const newArray=drivers.slice();
  newArray.unshift(name);
  return newArray;
}
function removeLastDriver(){
  const ndrivers= drivers.slice(0, drivers.length-1);
  return ndrivers;
}
function removeFirstDriver(){
  const ndrivers=drivers.slice(1,drivers.length);
  return ndrivers;

}
