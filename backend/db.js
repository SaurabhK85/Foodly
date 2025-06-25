require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("connected");
        
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        
        const foodCategory = mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();
        
        global.food_items = data;
        global.foodCategory = catData;
        
        
    } catch (err) {
        console.log(err);
    }
}

module.exports = mongoDB;