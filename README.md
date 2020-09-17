## Exploring Javascript ES6 Features

### Destructuring
Destructuring assignment is a syntax that allows you to assign object properties or array items as variables. 
1) Array Destructuring
2) Object Destructuring

#### Spread Operator
Spread Operator is unpacking collected elements such as arrays into single elements.
1) Spreading Array
2) Spreading Objects

#### Rest Parameter
Rest Parameter is used to collect all the remaining elements into an array. 
... means the rest parameter (collecting the rest of the elements)

1) Rest of elements - Array
2) Rest of properties - Objects

### "this" scope
1) Regular Functions
"this" keyword is determined by how a function is called (runtime binding).
2) Arrow Functions
"this" retains the value of the enclosing lexical context's this. In global code, it will be set to the global object
    a) Arrow function cannot be called with new keyword
    b) Arrow function doesn't have this, it will use the closest regular function context 
    c) Arrow function retains the this value of the enclosing lexical context
    d) The call, apply and bind methods are not suitable for Arrow functions as they were designed to allow methods to execute within different scopes.

3) Functions invocations 
    i) call & apply
        Functions call and apply will decide on which object function has to be invoked. Any function can be invoked using any object, which is not part of that function. 
        Both call and apply are similar, only the optional second parameters will behave differently.
        In call, the optional params should be passed as indivudal arguments.
        In apply, the optional params should be passed as arrays.

   ii) bind  
        Bind function creates the copy of the function and set the "this" value to that function.

### Promises
1) Basic fetch method using node-fetch api
2) Generators and Yield
3) Coroutines using blue bird api
Coroutines are used to resolve the callback hell and we can able to yield the promises from generators.
coroutine is a function that can use yield to yield promises. Control is returned back to the generator when the yielded promise settles. This can lead to less verbose code when doing lots of sequential async calls 
with minimal processing in between.
4) Async and Await


