const express = require('express');
const app = express();
const morgan = require('morgan');
const hotelRoutes = require('./routes/hotelRoutes');

// Set security HTTP headers using helmet package

app.use(express.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/hotels', hotelRoutes);

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find this ${req.originalUrl} on this server`, 400));
// });
// app.use(globalErrorHandler);

module.exports = app;
