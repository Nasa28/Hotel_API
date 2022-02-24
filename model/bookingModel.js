const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'A Hotel must have a name'],
      trim: true,
      unique: [true, 'firstName with this name already exist'],
      maxlength: [30, 'firstName name must not be more than 30 characters'],
      minlength: [5, 'firstName name must be more than 10 characters'],
    },

    lastName: {
      type: String,
      required: [true, 'A Hotel must have a name'],
      trim: true,
      unique: [true, 'lastName with this name already exist'],
      maxlength: [30, 'lastName name must not be more than 30 characters'],
      minlength: [5, 'lastName name must be more than 10 characters'],
    },

    phoneNumber: {
      type: String,
      required: [true, 'Please, Kindly add your phone number'],
    },

    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
