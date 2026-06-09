const express = require('express');
const router = express.Router();

const {
    addTransaction,
    getTransactions,
    deleteTransaction
} = require('../controllers/TransactionController');

router.post('/addTransaction', addTransaction);
router.get('/transactions/:email', getTransactions);
router.delete('/deleteTransaction/:id', deleteTransaction);

module.exports = router;