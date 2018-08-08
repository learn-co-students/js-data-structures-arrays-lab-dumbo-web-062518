const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name){
   return newDrivers = [...drivers, name]
}

function prependDriver(name){
  return newDrivers2 = [name, ...drivers]
}

function removeLastDriver(){
  return drivers.slice(0,-1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
