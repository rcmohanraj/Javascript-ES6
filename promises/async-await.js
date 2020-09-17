/* 
async function returns a promise
*/
async function convert(name) {
    const transformName = new Promise((resolve, reject) => {
        setTimeout(() => resolve(name.toUpperCase()), 5000);
    });
    //its very similar like yield, waits until a promise returns a result
    const result = await transformName; 
    return result;
}

convert("John")
.then(res => console.log(res))
.catch(err => console.log(err));
