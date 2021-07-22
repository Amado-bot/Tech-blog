const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  seedUsers();
  console.log('--------------');

 seedPosts();
  console.log('--------------');

 seedComments();
  console.log('--------------');

  process.exit(0);
};

seedAll();
