const fetch = require('node-fetch');

const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
    fetchRandomUsers
        .then(res => res
            .json()
            .then(users => users.results.forEach(user => {
                const {gender, email} = user;
                console.log(`Gender ${gender} and Email ${email}`);
            })))
        .catch(err => console.log(err));
}

getRandomUsers(5);