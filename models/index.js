//Requirements / Setup
const mongoose = require(`mongoose`);
const db = require(`./models`);
const food = require(`./food`);
const mealEntry = require(`./meal-entry`);
const mealTracker = require(`./meal-tracker`);

  require(`dotenv`).config();

//Schema setup

mongoose.connection.openUri(process.env.DB_CONN, {}, (err, connection) => {
  if (err) {
    console.log(`Error, ` err);
  } else {
    console.log(`Mongoose successfully connected!`)
  }
});
