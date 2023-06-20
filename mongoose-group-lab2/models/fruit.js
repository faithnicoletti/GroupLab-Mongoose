const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fruitSchema = new Schema ({
    name: String,
    vitamins: String, 
    dailyValue: Number
}, {
    timestamp: true
});

module.exports = mongoose.model('Fruit', fruitSchema);
