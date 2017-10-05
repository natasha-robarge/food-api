const mongoose = require(`mongoose`);
const Schema = mongoose.Schema();

const FoodServingSchema = new mongoose.Schema({
  food: {
    type: Food,
    name: String
  },
  numServings: Number
})

const MealDaySchema = new Schema({
  
})

const trackerSchema = new mongoose.Schema ({
  name: String,
  mealDays: [mealDaySchema]
})
