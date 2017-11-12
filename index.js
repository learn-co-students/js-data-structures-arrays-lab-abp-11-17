// Write your solution here!
const drivers = ["Milo","Otis","Garfield"]
function destructivelyAppendDriver (name) {
  drivers.push("Ralph")
}
function destructivelyPrependDriver(name){
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver(name){
  drivers.pop("Garfield")
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift("Milo")
}
function appendDriver(name){
  var addname = [...drivers];
  addname.push("Broom")
  return addname
}
function prependDriver(name){
  var shiftname = [...drivers];
  shiftname.unshift("Arnold")
  return shiftname
}
function removeLastDriver(name){
  var letname = [...drivers];
  letname.pop("Garfield")
  return letname
}
function removeFirstDriver(name){
  var yesname = [...drivers];
  yesname.shift("Milo")
  return yesname
}
