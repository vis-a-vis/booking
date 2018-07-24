const listings = [
  {
    listingId: 1,
    price: 90,
    minStay: 1,
    lastUpdate: new Date('July 17, 2018'),
    bookings: [
      [new Date('July 4, 2018'), new Date('July 8, 2018')],
      [new Date('July 19, 2018'), new Date('July 22, 2018')],
      [new Date('July 29, 2018'), new Date('August 7, 2018')],
    ],
    reviewStars: 4,
    reviewCount: 18,
  },
  {
    listingId: 2,
    price: 134,
    minStay: 1,
    lastUpdate: new Date('December 17, 2017'),
    bookings: [
      [new Date('June 4, 2018'), new Date('June 8, 2018')],
      [new Date('June 19, 2018'), new Date('June 22, 2018')],
      [new Date('June 29, 2018'), new Date('July 7, 2018')],
    ],
    reviewStars: 2,
    reviewCount: 102,
  },
];

export default listings;
