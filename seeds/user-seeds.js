
const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'hancock'

    },
    {
        username: 'Jake',
        password: 'DaSnake'
    },
    {
        username: 'Joe',
        password: 'mama'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;