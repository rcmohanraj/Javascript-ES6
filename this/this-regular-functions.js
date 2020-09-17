/* 
This keyword is determined by how a function is called (runtime binding)
*/

//Case 1: Regular Function with This keyword demo
console.log("Case 1: Regular Function with This keyword demo");

const person1 = {
    name: "Jonny Doe",
    age: 26,
    cars: ['maruti', 'tata'],
    toString: function() {
        console.log(`Name is ${this.name} and Age is ${this.age} and holding cars ${this.cars}`);
        this.cars.forEach( function(car) {
            console.log(`cars ${car}`);
        });
    }
}
person1.toString();

/* 
Output:
Case 1: Regular Function with This keyword demo
Name is Jonny Doe and Age is 26 and holding cars maruti,tata
cars maruti
cars tata
*/

console.log("---------------------------------------------------------");
const name = 'Mohan';
//Case 2: Nested Regular Function with This keyword demo
console.log("Case 2: Nested Regular Function with This keyword demo");
const person2 = {
    name: "Jonny Doe",
    age: 26,
    cars: ['maruti', 'tata'],
    toString: function() {
        console.log("Available cars:",this.cars);
        console.log(`Name is ${this.name} and Age is ${this.age} and holding cars ${this.cars}`);
        this.cars.forEach( function(car) {
            console.log(`Name is ${this.name} is holding cars ${car}`);
        });
    }
}

person2.toString();

/* 
Output:
Case 2: Nested Regular Function with This keyword demo
Available cars: [ 'maruti', 'tata' ]
Name is Jonny Doe and Age is 26 and holding cars maruti,tata
Name is undefined is holding cars maruti
Name is undefined is holding cars tata
*/

/* 
Here the regular function inside forEach is not having the access to this.name because this is 
determined by how a function is called (runtime binding). That's why we have received undefined 
in the same section of second function. To get the name we have two solutions.
1) bind this value to the second regular function
2) assign this to another variable and use new variable to the second function
*/
console.log("---------------------------------------------------------");

console.log("Case 3: Nested Regular Function with This keyword binding demo");
const person3 = {
    name: "Jonny Doe",
    age: 26,
    cars: ['maruti', 'tata'],
    toString: function() {
        console.log("Available cars:",this.cars);
        console.log(`Name is ${this.name} and Age is ${this.age} and holding cars ${this.cars}`);
        this.cars.forEach( function(car) {
            console.log(`Name is ${this.name} is holding cars ${car}`);
        }.bind(this)); // here bind of this will give run the forEach function in the person context
    }
}

person3.toString();

/* 
Output: Solution 1
Case 3: Nested Regular Function with This keyword binding demo
Available cars: [ 'maruti', 'tata' ]
Name is Jonny Doe and Age is 26 and holding cars maruti,tata
Name is Jonny Doe is holding cars maruti
Name is Jonny Doe is holding cars tata
*/
console.log("---------------------------------------------------------");

console.log("Case 4: Nested Regular Function with This keyword is stored in another variable demo");
const person4 = {
    name: "Jonny Doe",
    age: 26,
    cars: ['maruti', 'tata'],
    toString: function() {
        console.log("Available cars:",this.cars);
        console.log(`Name is ${this.name} and Age is ${this.age} and holding cars ${this.cars}`);
        const that = this; // here reference of this will be stored in new variable, so we can use this new variable to fetch
        this.cars.forEach( function(car) {
            console.log(`Name is ${that.name} is holding cars ${car}`);
        });
    }
}

person4.toString();

/* 
Output: Solution 2
Case 4: Nested Regular Function with This keyword is stored in another variable demo
Available cars: [ 'maruti', 'tata' ]
Name is Jonny Doe and Age is 26 and holding cars maruti,tata
Name is Jonny Doe is holding cars maruti
Name is Jonny Doe is holding cars tata
*/
console.log("---------------------------------------------------------");