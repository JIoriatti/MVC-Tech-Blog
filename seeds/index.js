const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');
const seedComments = require('./commentSeeds');

const sequelize = require('../config/connection');

const seedDB = async () =>{
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
    await sequelize.sync({force: true})
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1")
    console.log("\n**** Database Synced ****");
    await seedUsers();
    console.log("\n**** Users Seeded ****");
    await seedPosts();
    console.log("\n**** Posts Seeded ****");
    await seedComments();
    console.log("\n**** Comments Seeded ****");
    process.exit(0);
}

seedDB();