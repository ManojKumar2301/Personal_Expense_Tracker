const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb://localhost:27017/expenseTracker';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
