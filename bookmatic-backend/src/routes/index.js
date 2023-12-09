const express = require("express");
const router = express.Router();
const { signUp, login } = require('../controller/user-controller');
const { create , getTransactions, getById , update, destroy } = require('../controller/transaction-controller.js');

const isAuthenticated = require("../middleware/authentication_middleware");


router.post('/v1/signUp', signUp);
router.post('/v1/login', login);

router.post('/v1/transactions', isAuthenticated , create);
router.get('/v1/transactions/:id', getById);
router.get('/v1/transactions', isAuthenticated , getTransactions);

module.exports = router;

