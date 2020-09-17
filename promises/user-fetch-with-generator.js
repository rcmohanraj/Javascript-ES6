const fetch = require('node-fetch');
const Promise = require("bluebird");

/* 
Coroutines are used to resolve the callback hell and we can able to yield the 
promises from generators.
coroutine is a function that can use yield to yield promises. 
Control is returned back to the generator when the yielded promise settles. 
This can lead to less verbose code when doing lots of sequential async calls 
with minimal processing in between.
 */
const gen = Promise.coroutine(function* (n) {
    const res = yield fetch(`https://randomuser.me/api/?results=${n}`);
    const users = yield res.json();
    return users;
});

gen(2)
.then(users => users.results.forEach(user => {
    const {gender, email} = user;
    console.log(`Gender ${gender} and Email ${email}`);
}))
.catch(err => console.log(err));


