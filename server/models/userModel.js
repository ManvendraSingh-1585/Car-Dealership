// server/models/userModel.js
const mongoose = require('./db');

const UserSchema = new mongoose.Schema({
    user_email: { type: String, unique: true, required: true },
    user_id: { type: String, required: true },
    user_location: { type: String },
    user_info: { type: mongoose.Schema.Types.Mixed },
    password: { type: String, required: true },
    vehicle_info: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SoldVehicles' }],
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
