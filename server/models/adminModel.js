// server/models/adminModel.js
const mongoose = require('./db');

const AdminSchema = new mongoose.Schema({
    admin_id: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
