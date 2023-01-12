const { User } = require('../models');

const userData = [
    {
        username: "Jdawg12",
        password: "pass1232"
    },
    {
        username: "SarahScripts",
        password: "pass12343"
    },
    {
        username: "KenZ",
        password: "pass0998"
    }
];

//Second object passed through the bulkcreate() method in order to allow validation checking for bulk-creation
const seedUsers = () => User.bulkCreate(userData, {validate:true});

module.exports = seedUsers;