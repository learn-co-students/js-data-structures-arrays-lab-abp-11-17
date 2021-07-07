// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

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
  let array1 = [...drivers, name];
  return array1;
}

function prependDriver(name){
  const newFirstDriver = [name, ...drivers];
  return newFirstDriver;
}

function removeLastDriver(){
  const noLastDriver = drivers.slice(0, drivers.length - 1);
  return noLastDriver;
}

function removeFirstDriver(){
  const noFirstDriver = drivers.slice(1);
  return noFirstDriver;
}
