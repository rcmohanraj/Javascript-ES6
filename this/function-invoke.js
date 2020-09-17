// Function execution happening in the global scope
function message() {
    console.log(`Message is ${this.msg}`);
}
message();
/* 
Output:
Message is undefined
*/

console.log("******** Call and Apply functions ********");
/* 
Functions call and apply will decide on which object function has to be invoked.
Any function can be invoked using any object, which is not part of that function.
*/

const sms1 = {
    msg : "Hello World via Apply"
}
message.apply(sms1);

/* 
Output:
Message is Hello World via Apply
*/

const sms2 = {
    msg : "Hello World via Call"
}
message.call(sms2);

/* 
Output:
Message is Hello World via Call
*/

/* 
Both call and apply are similar, only the optional second parameters will behave differently.
In call, the optional params should be passed as indivudal arguments
In apply, the optional params should be passed as arrays
*/

const welcome = function (guest, origin) {
    console.log(`I'm ${this.name}, you're ${guest.name} from ${origin.country}`);
}
const owner = { name: "Owner"};
const guest = { name: "Guest"};
const origin = {country : 'Germany' };
welcome.call(owner, guest, origin);  //Here the first param used to set the this context
welcome.apply(owner, [guest, origin]);  //Here the first param used to set the this context

/* 
Output:
I'm Owner, you're Guest from Germany
I'm Owner, you're Guest from Germany
*/

console.log("******** Bind function ********");

/* 
Bind function creates the copy of the function and set the "this" value 
to that function.
*/

const person = {
    name: "Anna Smith",
    getName: function() {
        return this.name;
    }
};
  
const name = person.getName();
console.log("Name = ", name);

/* 
Output:
Name = Anna Smith
*/

const nameFunction = person.getName;
console.log("Name = ", nameFunction());

/* 
Output:
Name = undefined
*/

/* 
In the second nameFunction, we are executing in the global scope. 
Here we can bind the person object to pass the scope of this function.
*/

const nameFunctionBinded = nameFunction.bind(person);
console.log("Name = ", nameFunctionBinded());
/* 
Output:
Name = Anna Smith
*/
