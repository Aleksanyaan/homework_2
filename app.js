import { faker } from '@faker-js/faker';
import lodash from 'lodash';

let users = [];

for(let i = 0; i < 10; i++) {
    users.push({
        name: faker.person.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number()
    });
}

console.log(users);

console.log("Sorted by name: \n", 
  lodash.sortBy(users, (user) => {
    return user.name;
}));