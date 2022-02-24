const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelContoller');

const {
  uploadProductImages,
  allHotels,
  createHotel,
  getHotel,
  updateHotel,
  deleteHotel,
} = hotelController;

router.route('/').get(allHotels).post(uploadProductImages, createHotel);
router.route('/:id').get(getHotel).patch(updateHotel).delete(deleteHotel);

module.exports = router;
