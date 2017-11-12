// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(x){
  drivers.push(x);
}
function destructivelyPrependDriver(x){
  drivers.unshift(x);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(x){
  const newArray = [...drivers, x]
  return newArray;
}
function prependDriver(x){
  const newArray = [x, ...drivers];
  return newArray;
}
function removeLastDriver(){
    const newArray = drivers.slice(0, drivers.length -1);
    return newArray;
}
function removeFirstDriver(){
  const newArray = drivers.slice(1);
  return newArray;
}
