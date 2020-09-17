/* 
Destructuring assignment is a syntax that allows you to assign object properties 
or array items as variables. 
*/

console.log("******** Destructuring - Arrays ********");

const names = ['Anna Smith', 'Johny Doe', 'Ben Brock'];

const [name1, name2, name3] = names;

console.log(`name1 = ${name1}, name2 = ${name2}, name3 = ${name3}`);

/* 
Output:
name1 = Anna Smith, name2 = Johny Doe, name3 = Ben Brock
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [number1, , number3, number4, ...restOfNumbers] = numbers;

console.log(`number1 = ${number1}, number3 = ${number3}, number4 = ${number4}`);
console.log(`restOfNumbers = ${restOfNumbers}, and length = ${restOfNumbers.length}`);

/* 
Output:
number1 = 1, number3 = 3, number4 = 4
restOfNumbers = 5,6,7,8,9,10, and length = 6
*/

console.log("******** Destructuring - Object ********");

const getUser = () => {
    return {
        name : 'Johny',
        surname : 'Doe',
        gender : 'Male',
        age: 30,
        address : {
            city : 'Berlin',
            country : 'Germany',
            continent : 'Europe',
            fullAddress : {
                doorNumber : 50,
                street : 'tech street'
            }
        }
    }
}

const user = getUser();

const { name, age } = user;
console.log(`${name} is ${age} years old`);

const { address : { country : theCountry } } = user;
console.log(`${name} is living in ${theCountry}`);

const { address : { fullAddress : { doorNumber : theDoortNumber } } } = user;
console.log(`${name} is living in ${theCountry} at door number ${theDoortNumber}`);

/* 
Output:
Johny is 30 years old
Johny is living in Germany
Johny is living in Germany at door number 50
*/

const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];

  for( const { name : n, age : a, family : { father : f} } of people) {
    console.log(`${f} is a father of ${n} and ${n} is ${a} years old`);
  }

/* 
Output:
Harry Smith is a father of Mike Smith and Mike Smith is 35 years old
Richard Jones is a father of Tom Jones and Tom Jones is 25 years old
*/