const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push("Ralph");
}
function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  const newArray = drivers.slice();
  newArray.push("Broom");
  return newArray;
}

function prependDriver(name){
  const newArray = drivers.slice();
  newArray.unshift("Arnold");
  return newArray;
}

function removeLastDriver(){
  const newArray = drivers.slice();
  newArray.pop();
  return newArray;
}

function removeFirstDriver(){
  const newArray = drivers.slice();
  newArray.shift();
  return newArray;
}
