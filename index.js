// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  drivers.push('Ralph');
  console.log(drivers)
}
function destructivelyPrependDriver() {
  drivers.unshift("Bob");
  console.log(drivers)
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  console.log(drivers)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  console.log(drivers)
}

function appendDriver(name) {
  var newDrivers = [...drivers, "Broom"];
   return(newDrivers)
  console.log(drivers)
}
function prependDriver(name){
  const driversUpdate = ["Arnold",...drivers];
  return driversUpdate;
}

function removeLastDriver(){
  const driversUpdate1 = drivers.slice(0, drivers.length-1);
  return driversUpdate1;
}

function removeFirstDriver(){
  const driversUpdate2 = drivers.slice(1);
  return driversUpdate2;
}
