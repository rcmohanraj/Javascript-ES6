const fetch = require('node-fetch');

const gen = async (n) => {
    try {
        const res = await fetch(`https:randomuser.me/api/?results=${n}`);
        const users = await res.json();
        users.results.forEach(user => {
            const {gender, email} = user;
            console.log(`Gender ${gender} and Email ${email}`);
        });
    } catch(ex) {
        console.log(ex.message);
    }
}

gen(2);
