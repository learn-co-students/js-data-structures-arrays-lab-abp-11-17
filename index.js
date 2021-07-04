// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver()
{
  const array = drivers.push('Ralph');
}
function destructivelyPrependDriver()
{
  const array = drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver()
{
  const array = drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  const array = drivers.shift();
}

function appendDriver() {
  return [...drivers.slice(0), "Broom"];
}

function prependDriver() {
  return ["Arnold", ...drivers.slice(0)];
}

function removeLastDriver() {
  return [...drivers.slice(0,2)];
}

function removeFirstDriver() {
  return [...drivers.slice(1,3)];
}
