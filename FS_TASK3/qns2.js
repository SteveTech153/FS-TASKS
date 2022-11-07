let cargoHold =  ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[cargoHold.indexOf("slinky")]="space tether";
console.log(cargoHold);

cargoHold.pop();
console.log(cargoHold);

cargoHold.shift();
console.log(cargoHold);

cargoHold.unshift(1138);
cargoHold.push("20 meters");
console.log(cargoHold);

console.log(`array : ${cargoHold} \n length : ${cargoHold.length}`)
