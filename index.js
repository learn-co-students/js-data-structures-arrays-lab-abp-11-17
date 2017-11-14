const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(name){
  drivers.pop();  
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift();
}

function appendDriver(broom){
 return [...drivers, broom];
}

function prependDriver(arnold){
 return [arnold, ...drivers];
}

function removeLastDriver(name){
  return drivers.slice(0, drivers.length -1);
}

function removeFirstDriver(name){
  return drivers.slice(1); 
}


