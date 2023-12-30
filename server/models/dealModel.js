// server/models/dealModel.js
const mongoose = require('./db');

const DealSchema = new mongoose.Schema({
    deal_id: { type: String, unique: true, required: true },
    car_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    deal_info: { type: mongoose.Schema.Types.Mixed },
});

const DealModel = mongoose.model('Deal', DealSchema);

module.exports = DealModel;
