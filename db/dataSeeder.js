const mongoose = require('mongoose');
const { listings } = require('./dataGenerator');

mongoose.connect('mongodb://localhost:27017');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  let listingSchema = new mongoose.Schema({
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
  let Listing = mongoose.model('Listing', listingSchema);
  Listing.insertMany(listings)
    .then(console.log('listings have been added to db'))
    .catch(console.log('error adding listings'));

  module.exports = {
    Listing: Listing,
  };
});
