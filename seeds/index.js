const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');
const seedComments = require('./commentSeeds');

const sequelize = require('../config/connection');

const seedDB = async () =>{
    await sequelize.sync({force:true});
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