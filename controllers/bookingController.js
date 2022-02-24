const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const Hotel = require('../model/hotelModel');
const catchAsync = require('../utils/catchError');
const AppError = require('../utils/AppError');

exports.checkout = catchAsync(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);
  console.log(hotel)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/api/v1/products`,
    cancel_url: `${req.protocol}://${req.get('host')}/api/v1/products`,
    customer_email: req.body.email,
    client_reference_id: req.params.id,
    line_items: [
      {
        name: `${hotel.name} Hotel`,
        description: hotel.description,
        images: [
          'http://res.cloudinary.com/dtbhikp70/image/upload/v1645684370/Hotels/2022-02-24T06_32_49_hpk2iq.png',
        ],
        amount: hotel.price * 100,
        currency: 'usd',
        quantity: 1,
      },
    ],
  });

  res.status(200).json({
    status: 'Success',
    session,
  });
});
