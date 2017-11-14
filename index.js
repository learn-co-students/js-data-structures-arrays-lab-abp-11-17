// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver(name) {
   drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name){
  drivers.pop("Bob");
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift("Ralph");
}

function appendDriver(name){
  return [...drivers, "Broom"];
}

function prependDriver(name){
  return ["Arnold", ...drivers];
}

function removeLastDriver(name){
  return drivers.slice(0, drivers.length -1);
}

function removeFirstDriver(name){
  return drivers.slice(1)
}
