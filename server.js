const express = require('express');
const serverConfig = require('./config/server.config');
const app = express();
const mongoose = require('mongoose');

/* logic to connect to MongoDB Create an ADMIN user */

const dbConfig = require('./config/db.config');
const userModel = require('./models/user.model');
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to DB");
});

db.once("open", () => {
    console.log("DB is connected");
    initializeAdminUser();
});

async function initializeAdminUser() {

    /*checking if the admin is already present or not   */

    let admin = await userModel.findOne({
        userId : "admin"
    })

    if(admin){
        console.log("Admin user is already present");
    }

    /* Initialize the mongoose & create the ADMIN user */
    admin = await userModel.create({
        name: "Rohit Sah",
        userId: "admin",
        email: "rohitsah402@gmail.com",
        userType: "ADMIN",
        password: "welcome"
    });

    console.log(admin);
}

app.listen(serverConfig.PORT, () => {
    console.log('Server started at port number', serverConfig.PORT);
});
