element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]

let table = [];
table.push(element1);
table.push(element2);
table.push(element26);

console.log(table);

console.log(table[1]+ " is the 1st element in the table and "+table[1][1]+" is the 1st element of the 1st element in the table");

console.log("mass of ele 1 "+table[0][2]);
console.log("name of ele 2 "+table[1][0]);
console.log("symbol of ele 26 "+table[2][1]);