// server/controllers/userController.js
const UserModel = require('../models/userModel');
const SoldVehiclesModel = require('../models/soldVehiclesModel');
const DealModel = require('../models/dealModel');
const CarModel = require('../models/carModel');
const DealershipModel = require('../models/dealershipModel');

const UserController = {
    getAllCars: async (req, res) => {
        try {
            const cars = await CarModel.find();
            res.json(cars);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Add other user-related controller functions here
};

module.exports = UserController;
