// server/models/soldVehiclesModel.js
const mongoose = require('./db');

const SoldVehiclesSchema = new mongoose.Schema({
    vehicle_id: { type: String, unique: true, required: true },
    car_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    vehicle_info: { type: mongoose.Schema.Types.Mixed },
});

const SoldVehiclesModel = mongoose.model('SoldVehicles', SoldVehiclesSchema);

module.exports = SoldVehiclesModel;
