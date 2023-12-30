// server/models/carModel.js
const mongoose = require('./db');

const CarSchema = new mongoose.Schema({
    car_id: { type: String, unique: true, required: true },
    type: { type: String },
    name: { type: String },
    model: { type: String },
    car_info: { type: mongoose.Schema.Types.Mixed },
});

const CarModel = mongoose.model('Car', CarSchema);

module.exports = CarModel;
