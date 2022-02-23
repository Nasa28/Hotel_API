const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');


const { allHotels, createHotel, getHotel, updateHotel, deleteHotel } =
  hotelController;

router.route('/').get(allHotels).post(createHotel);
router.route('/:id').get(getHotel).patch(updateHotel).delete(deleteHotel);

module.exports = router;
