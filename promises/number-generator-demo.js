
const generator = function* (numbers) {
    for(let i = 0; i < numbers.length; i++) {
        yield numbers[i];
    }
}

const gen = generator([1, 2, 3, 4, 5]);

const interval = setInterval( () =>  {
    const next = gen.next();
    if (next.done) {
        console.log("Generator Done");
        clearInterval(interval);
    } else {
        console.log(next.value);
    }
}, 1000);