/* 
This retains the value of the enclosing lexical context's this. 
In global code, it will be set to the global object
*/

//Case 1: Arrow Function with This keyword demo
console.log("Case 1: Arrow Function with This keyword demo");

const person1 = {
    name: "Jonny Doe",
    age: 26,
    cars: ['maruti', 'tata'],
    toString: () => {
        console.log(`Name is ${this.name} and Age is ${this.age} and holding cars ${this.cars}`);
        this.cars.forEach( function(car) {
            console.log(`cars ${car}`);
        });
    }
}
try {
    person1.toString();
} catch(ex) {
    console.log("Exception Message = ", ex.message);
}


/* 
Output:
Case 1: Arrow Function with This keyword demo
Name is undefined and Age is undefined and holding cars undefined
Exception Message =  Cannot read property 'forEach' of undefined
*/

/* 
Here the arrow function will take the closest function as this context. As there
is no closest function it returns undefined for all this.varaibles.
*/

console.log("---------------------------------------------------------");

//Case 2: Nested Arrow Function with This keyword demo
console.log("Case 2: Nested Arrow Function with This keyword demo");
const person2 = {
    name: "Jonny Doe",
    age: 26,
    cars: ['maruti', 'tata'],
    toString: function() {
        console.log("Available cars:",this.cars);
        console.log(`Name is ${this.name} and Age is ${this.age} and holding cars ${this.cars}`);
        this.cars.forEach( car => {
            console.log(`Name is ${this.name} is holding cars ${car}`);
        });
    }
}

person2.toString();

/* 
Output:
Case 2: Nested Arrow Function with This keyword demo
Available cars: [ 'maruti', 'tata' ]
Name is Jonny Doe and Age is 26 and holding cars maruti,tata
Name is Jonny Doe is holding cars maruti
Name is Jonny Doe is holding cars tata
*/

/* 
Here the arrow function will take the context of regular function and 
use this to fetch the values.
1) Arrow function cannot be called with new keyword
2) Arrow function doesn't have this, it will use the closest regular function context 
3) Arrow function retains the this value of the enclosing lexical context
4) The call, apply and bind methods are not suitable for Arrow functions 
as they were designed to allow methods to execute within different scopes
*/
console.log("---------------------------------------------------------");

