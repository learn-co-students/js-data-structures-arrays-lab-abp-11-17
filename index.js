const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(){
  drivers.push('Ralph')
}

function destructivelyPrependDriver(){
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(){
  const append = [...drivers, 'Broom'];
  return append;
}

function prependDriver(){
  const prepend = ['Arnold', ...drivers];
  return prepend;
}

function removeLastDriver(){
  const last = drivers.slice(0,2);
  return last;
}

function removeFirstDriver(){
  const first = drivers.slice(1);
  return first;
}
