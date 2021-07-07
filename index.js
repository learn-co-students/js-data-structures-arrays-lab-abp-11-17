// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

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
var newArr = [...drivers, name];
return newArr;
}

function prependDriver(name){
var newArr = [name, ...drivers];
return newArr;
}

function removeLastDriver(){
  var newArr = drivers.slice(0,2);
  return newArr;
}

function removeFirstDriver(){
  var newArr = drivers.slice(1,3);
  return newArr;
}
