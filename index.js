// Write your solution here!
const drivers = ["Milo","Otis","Garfield"];
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
  let drivers2 = [...drivers.slice(),name];
  return drivers2;
}
function prependDriver(name){
  let drivers2 = [name,...drivers.slice()];
  return drivers2;
}
function removeLastDriver(){
  let drivers2 = [...drivers.slice(0, drivers.length-1)];
  return drivers2;
}
function removeFirstDriver(){
  let drivers2 = [...drivers.slice(1)];
  return drivers2;
}
