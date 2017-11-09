// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendDriver(x) {
  drivers.push(x)
}
function destructivelyPrependDriver(x){
  drivers.unshift(x)
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(x)
{
  const newdrivers = [...drivers, x];
  return newdrivers
}
function prependDriver(x)
{
  const newdrivers = [x, ...drivers];
  return newdrivers
}

function removeLastDriver(x) {
const newdrivers = drivers.slice(0,drivers.length - 1);
    return newdrivers
}

function removeFirstDriver(x) {
const newdrivers = drivers.slice(1);
    return newdrivers
}
