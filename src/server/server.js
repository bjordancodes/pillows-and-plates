const express = require('express');
const { json } = require("body-parser");
const firebase = require("firebase");
require("firebase/database");
require("dotenv").config();

const app = express();
app.use(json());

var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };

firebase.initializeApp(config);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port} ^___^!`);
});

// THIS IS ME, YA BOI, GIVING YOU A MESSAGE THROUGH A SNEAKY COMMENT