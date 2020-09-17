/* 
Spread Operator is unpacking collected elements such as arrays into single elements.
*/

console.log("******** Spread Operator - Arrays ********");

const firstNames = ["Randy" , "John" , "Brock"];
const lastNames = ["Orton" , "Cena" , "Lesnar"];
const newArray = [...firstNames, ...lastNames];
console.log(newArray);

/* 
Output:
[ 'Randy', 'John', 'Brock', 'Orton', 'Cena', 'Lesnar' ]
*/

const firstName = "Cena";
const toArray = [...firstName];
toArray.forEach( char => console.log(char));

/* 
Output:
C
e
n
a
*/

const add = (a, b, c) => {
    return a + b + c;
}

const numbers = [1, 2, 3];

console.log("sum=>",add(...numbers));
/* 
Output:
sum=> 6
*/

console.log("******** Spread Operator - Objects ********");

const address = {
    city : 'Berlin',
    country : 'Germany',
    continent : 'Europe'
}

const name = {
    firstName : 'Anna',
    lastName : 'Smith'
}

const person = { ...address, ...name };
console.log("person = ",person);

/* 
Output:
person =  {
  city: 'Berlin',
  country: 'Germany',
  continent: 'Europe',
  firstName: 'Anna',
  lastName: 'Smith'
}
*/