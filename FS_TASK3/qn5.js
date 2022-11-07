let str = 'In space, no one can hear you code.';

console.log(str.split()); // convert into single element in a array
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

// b.)

let s = ['B', 'n', 'n', 5];
console.log(s.join()); // converts into string seperated by comma   "B,n,n,5"
console.log(s.join('a')); // converts into string combined using the letter 'a'  "Banana5"
console.log(s.join(' ')); // "B n n 5"
console.log(s.join('')); // "Bnn5"

// c.)

console.log(str);  // No
console.log(s);    // No

let alpha = "water,space suits,food,plasma sword,batteries";
let arr = alpha.split(',');
arr.sort();
let str1 = arr.join(" ");
console.log(str1);