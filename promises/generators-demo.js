
const generator = function* () {
    yield 1;
    yield true;
    yield "10";
    yield {name : 'Jhon'};
    return "generator done";
}

const gen = generator();
console.log(gen.next().value);//will give the first yield value and done will be false here.
console.log(gen.next().value);//will give the second yield value and done will be false here.
console.log(gen.next().value);//will give the third yield value and done will be false here.
console.log(gen.next().value);//will give the fourth yield value and done will be false here.
console.log(gen.next().value);//will give the last return value and done will be true here.

