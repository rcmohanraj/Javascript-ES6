/* 
Rest Parameter is used to collect all the remaining elements into an array.
... means the rest parameter (collecting the rest of the elements)
*/

console.log("******** Rest Parameter - Arrays ********");

var names = ["John" , "Marian" , "Joe", "Adam"];
const [name1 , ...otherNames] = names;
console.log(name1);
console.log(otherNames);

/* 
Output:
John
[ 'Marian', 'Joe', 'Adam' ]
*/

function add(...args) {
    return args.reduce((previous, current) => previous + current);
}

const result = add(1, 2, 3);
console.log("sum =>",result);
/* 
Output:
sum => 6
*/

function display(a, b, ...args) {
    console.log("a = ", a);
    console.log("b = ", b);
    args.forEach(number => console.log("rest = ", number));
}

display(1, 2, 3, 4);

/* 
Output:
a =  1
b =  2
rest =  3
rest =  4
*/

console.log("******** Rest Parameter - Objects ********");

const employee = {
    id : 1,
    firstName : 'John',
    lastName : 'Smith',
    minor : true
}

const { minor, ...rest } = employee;
console.log("minor = ", minor);
console.log("rest = ", rest);

/* 
Output:
minor =  true
rest =  { id: 1, firstName: 'John', lastName: 'Smith' }
*/