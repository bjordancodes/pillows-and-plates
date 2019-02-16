const firebase = require("firebase");
require("firebase/database");
require("dotenv").config();

var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };

firebase.initializeApp(config);