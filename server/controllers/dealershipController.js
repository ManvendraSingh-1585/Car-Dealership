// server/controllers/dealershipController.js
const DealershipModel = require('../models/dealershipModel');
const SoldVehiclesModel = require('../models/soldVehiclesModel');
const DealModel = require('../models/dealModel');
const CarModel = require('../models/carModel');

const DealershipController = {
    getAllCars: async (req, res) => {
        try {
            const cars = await CarModel.find();
            res.json(cars);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Add other dealership-related controller functions here
};

module.exports = DealershipController;
