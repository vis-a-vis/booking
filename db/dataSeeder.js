const mongoose = require('mongoose');
const _ = require('underscore');
const { listings } = require('./dataGenerator');

mongoose.connect('mongodb://localhost:27017/listings', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const listingSchema = new mongoose.Schema({
  listingId: { type: Number, unique: true },
  price: Number,
  cleaningFee: Number,
  minStay: Number,
  maxGuests: Number,
  lastUpdate: Date,
  bookings: [
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
    [Date, Date],
  ],
  reviewStars: Number,
  reviewCount: Number,
});
const Listing = mongoose.model('Listing', listingSchema);

_.once(() => {
  Listing.insertMany(listings)
    .then(() => {
      console.log('listings have been added to db');
    })
    .catch(() => {
      console.log('error adding listings');
    });
});

module.exports = Listing;
