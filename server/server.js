const express = require('express');
const mongoose = require('./db');
const userRoutes = require('./routes/userRoutes');
const dealershipRoutes = require('./routes/dealershipRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/dealerships', dealershipRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
