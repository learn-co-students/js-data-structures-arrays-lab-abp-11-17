// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(array){
  drivers.push('Ralph');
}
function destructivelyPrependDriver(array){
  drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(array){
  drivers.pop(2);
}
function destructivelyRemoveFirstDriver(array){
  drivers.shift();
}
function appendDriver(array){
  const array2 = [...drivers, 'Broom'];
  return array2
}
function prependDriver(array){
  const array1 = ['Arnold', ...drivers]
  return array1
}
function removeLastDriver(array){
  return drivers.slice(0, drivers.length -1);
}
function removeFirstDriver(array){
  return drivers.slice(1)
}
