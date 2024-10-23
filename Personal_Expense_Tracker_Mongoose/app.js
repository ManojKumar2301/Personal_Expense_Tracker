const express = require('express');
const connectDB = require('./config/db'); 
const transactionRoutes = require('./routes/transactionRoutes')

const app = express();
const PORT = 3000;

connectDB();


app.use(express.json());

app.use('/api/transactions', transactionRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the Personal Expense Tracker API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
