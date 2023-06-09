const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.219hgfm.mongodb.net/chatAppMern?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Connected successfully");
    })
    .catch(error => {
    console.log(error);
    });

//mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.219hgfm.mongodb.net/?retryWrites=true&w=majority