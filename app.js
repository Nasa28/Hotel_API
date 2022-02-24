const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const hotelRoutes = require('./routes/hotelRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const errorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');

// Set security HTTP headers using helmet package


app.use(express.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use('/api/v1/hotels', hotelRoutes);

app.use('/api/v1/booking', bookingRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find this ${req.originalUrl} on this server`, 400));
});
app.use(errorHandler);

module.exports = app;
