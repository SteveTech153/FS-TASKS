let cargoHold = [
    1138,
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'space tether',
    '20 meters'
  ];

console.log(cargoHold);
cargoHold.splice(3,0,'keys');
console.log(cargoHold);

let idx = cargoHold.indexOf('slinky');
cargoHold[idx] = 'space tether';
console.log(cargoHold);


console.log(cargoHold.pop()); 
console.log(cargoHold);

console.log(cargoHold.shift());
console.log(cargoHold);


cargoHold.unshift("1138");
cargoHold.push("20 meters");
console.log(cargoHold);


console.log(`Array : ${cargoHold} \nlength is ${cargoHold.length}`);