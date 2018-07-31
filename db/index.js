const mongoose = require('mongoose');
const Listing = require('./dataSeeder');

mongoose.connect('mongodb://localhost:27017/listings', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const findListing = (listingId, callback) => {
  Listing.findOne({ listingId: listingId })
    .exec((err, listing) => callback(err, listing));
};

module.exports = {
  findListing: findListing,
};

// findListing(1, (err, data) => {
//   if (err) {
//     console.log('error');
//   } else {
//     console.log(data);
//   }
// });
