drivers = ["Milo", "Otis", "Garfield"];
function drivers(){
  const drivers = [Milo, Otis, Garfield];
}

function destructivelyAppendDriver () {
  drivers.push ('Ralph')
}
function destructivelyPrependDriver (){
  drivers.unshift ('Bob')
}
function destructivelyRemoveLastDriver (){
  drivers.pop ()
}
function destructivelyRemoveFirstDriver (){
  drivers.shift()
}
function appendDriver () {
  return appendDriver = [...drivers, 'Broom'];
}
function prependDriver () {
  return prependDriver = ['Arnold', ...drivers];
}
function removeLastDriver () {
  return removeLastDriver = drivers.slice(0, drivers.length - 1);
}
function removeFirstDriver() {
  return removeFirstDriver  = drivers.slice (1);
}
