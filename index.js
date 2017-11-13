// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
//drivers.push('Milo', 'Otis', 'Garfield');
function destructivelyAppendDriver(name) {
  drivers.push(name);
  return
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return
}
function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
  return
}
function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
  return
}
function appendDriver(name) {
  let newArray = drivers.slice();
  newArray.push(name);
  return newArray;
}
function prependDriver(name) {
  let newArray = drivers.slice();
  newArray.unshift(name);
  return newArray;
}
function removeLastDriver(name) {
  let newArray = drivers.slice();
  newArray.pop(name);
  return newArray;
}
function removeFirstDriver(name) {
  let newArray = drivers.slice();
  newArray.shift(name);
  return newArray;
}


//var newArray = oldArray.slice();
