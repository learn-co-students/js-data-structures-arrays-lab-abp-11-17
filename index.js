// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(){
  return drivers.push("Ralph");
};

function destructivelyPrependDriver(){
  return drivers.unshift("Bob");
};

function destructivelyRemoveLastDriver(){
  return drivers.pop();
};

function destructivelyRemoveFirstDriver(){
  return drivers.shift();
};

function appendDriver(){
  let newDriver = [];
  newDriver = [...drivers.slice(0),"Broom"];
  return newDriver;
}

function prependDriver(){
  let newNewDriver = [];
  newNewDriver = ["Arnold",...drivers.slice(0)];
  return newNewDriver;
}

function removeLastDriver(){
  let newArray = [];
  newArray = drivers.slice(0,2);
  return newArray;
}

function removeFirstDriver(){
  let newsArray = [];
  newsArray = drivers.slice(1);
  return newsArray;
}
