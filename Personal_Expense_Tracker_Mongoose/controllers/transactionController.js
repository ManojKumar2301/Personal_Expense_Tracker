const Transaction = require('../models/Transaction');

// Create a new transaction
exports.createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ error: "Transaction not found" });
        res.json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update transaction by ID
exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transaction) return res.status(404).json({ error: "Transaction not found" });
        res.json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete transaction by ID
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ error: "Transaction not found" });
        res.json({ message: "Transaction deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get transaction summary
exports.getSummary = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        const totalIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
        const totalExpenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
        const balance = totalIncome - totalExpenses;

        res.json({ totalIncome, totalExpenses, balance });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
