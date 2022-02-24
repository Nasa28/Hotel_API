const mongoose = require('mongoose');
const slugify = require('slugify');

const hotelSchema = new mongoose.Schema({
  slug: String,
  name: {
    type: String,
    required: [true, 'A Hotel must have a name'],
    trim: true,
    unique: [true, 'Hotel with this name already exist'],
  },

  address: {
    type: String,
    trim: true,
    required: [true, 'Hotel must have a address'],
  },
  price: {
    type: Number,
    required: [true, 'A Hotel must have a price'],
  },

  description: {
    type: String,
    trim: true,
    required: [true, 'Hotel must have a description'],
  },

  image: String,

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

hotelSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
const Hotel = mongoose.model('Hotel', hotelSchema);


module.exports = Hotel;
