let people = ["Greg", "Mary", "Devon", "James"];
for(let i1=0;i1<people.length;i1++){
    console.log(people[i1]+"\n");
}

people.splice(people.indexOf("Greg"),1);


people.splice(people.indexOf("James"),1);


people.unshift("Matt");

people.push("Steve");

for(let i1=0;i1<people.length;i1++){
    console.log(people[i1]+"\n");
    if(people[i1]=="Mary"){
        break;
    }
}

let copy = people.slice(2, people.length);
console.log(copy);

// h.)
console.log(people.indexOf('Mary'));

// i.)
console.log(people.indexOf('Foo'));

// j.)

people =  ["Greg", "Mary", "Devon", "James"];

people.splice(0, 1);

people.splice(2, 0, 'Elizabeth', 'Artie');

console.log(people);


// k.)

let withBob = people.concat('Bob');
console.log(withBob);
