const express = require('express');

const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get('/checkout/:id', bookingController.checkout);

module.exports = router;
