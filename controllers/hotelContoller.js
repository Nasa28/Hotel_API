const Hotel = require('../model/hotelModel');
const catchAsync = require('../utils/catchError');
const AppError = require('../utils/AppError');

exports.allHotels = catchAsync(async (req, res, next) => {
  const hotels = await Hotel.find();

  res.status(200).json({
    count: hotels.length,
    status: 'Success',
    data: {
      hotels,
    },
  });
});

exports.createHotel = catchAsync(async (req, res, next) => {
  const newHotel = await Hotel.create(req.body);

  newProduct.__v = undefined;
  res.status(200).json({
    status: 'Created',
    data: {
      hotel: newHotel,
    },
  });
});

exports.getHotel = catchAsync(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);
  if (!hotel) {
    return next(new AppError(`No product found with id ${req.params.id}`, 404));
  }
  res.status(200).json({
    status: 'Success',
    data: {
      hotel,
    },
  });
});

exports.updateHotel = catchAsync(async (req, res, next) => {
  const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!hotel) {
    return next(new AppError(`No product found with id ${req.params.id}`, 404));
  }
  res.status(200).json({
    status: 'Updated',
    data: {
      hotel,
    },
  });
});

exports.deleteHotel = catchAsync(async (req, res, next) => {
  const hotel = await Hotel.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(
      new AppError(`Product with id ${req.params.id} does not exist`, 404),
    );
  }
  res.status(201).json({
    status: 'Product deleted',
  });
});
