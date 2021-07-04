const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
 drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
 drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop("Ralph");
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift("Bob");
}

function appendDriver(name) {
 const driversUpdate = [...drivers, "Broom"]
 return driversUpdate
}

function prependDriver(name) {
  const driversUpdate = ["Arnold",...drivers]
  return driversUpdate
}

function removeLastDriver(name) {
 const driversUpdate = drivers.slice(0, drivers.length-1);
 return driversUpdate;
}

function removeFirstDriver(name) {
 const driversUpdate = drivers.slice(1);
 return driversUpdate;
}
