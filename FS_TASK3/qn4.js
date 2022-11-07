let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']
let arr = holdCabinet1.concat(holdCabinet2);
console.log("concated array "+arr);
console.log("holdCab 1 "+holdCabinet1);

console.log( holdCabinet1.slice(0,2));
console.log(holdCabinet1);
console.log( holdCabinet2.slice(0,2));
console.log(holdCabinet2);

holdCabinet1.reverse();
console.log(holdCabinet1);

holdCabinet2.sort();
console.log(holdCabinet2);

