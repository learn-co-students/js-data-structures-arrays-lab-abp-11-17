const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}
function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  const addADriver = [...drivers, name];
  return addADriver;
}
function prependDriver(name){
  const addADriver2 = [name, ...drivers];
  return addADriver2;
}
function removeLastDriver(){
  const removeDriver1 = drivers.slice(0,-1)
  return removeDriver1;
}
function removeFirstDriver(){
  const removeDriver = drivers.slice(1);
  return removeDriver;
}
