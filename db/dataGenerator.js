const faker = require('faker');

const hundredListings = [
  {
    listingId: 1,
    price: 90,
    cleaningFee: 35,
    minStay: 1,
    maxGuests: 4,
    lastUpdate: new Date('2018-05-12'),
    bookings: [
      [new Date('2018-07-01'), new Date('2018-07-04')],
      [new Date('2018-07-09'), new Date('2018-07-14')],
      [new Date('2018-07-18'), new Date('2018-07-21')],
      [new Date('2018-07-27'), new Date('2018-07-30')],
      [new Date('2018-08-03'), new Date('2018-08-05')],
      [new Date('2018-08-07'), new Date('2018-08-10')],
      [new Date('2018-08-18'), new Date('2018-08-25')],
      [new Date('2018-08-27'), new Date('2018-08-30')],
      [new Date('2018-09-01'), new Date('2018-09-04')],
      [new Date('2018-09-09'), new Date('2018-09-14')],
      [new Date('2018-09-18'), new Date('2018-09-21')],
      [new Date('2018-09-27'), new Date('2018-09-30')],
      [new Date('2018-10-01'), new Date('2018-10-04')],
      [new Date('2018-10-09'), new Date('2018-10-14')],
      [new Date('2018-10-18'), new Date('2018-10-21')],
      [new Date('2018-10-27'), new Date('2018-10-30')],
      [new Date('2018-11-01'), new Date('2018-11-04')],
      [new Date('2018-11-09'), new Date('2018-11-14')],
      [new Date('2018-11-18'), new Date('2018-11-21')],
      [new Date('2018-11-27'), new Date('2018-11-30')],
      [new Date('2018-12-01'), new Date('2018-12-04')],
      [new Date('2018-12-09'), new Date('2018-12-14')],
      [new Date('2018-12-18'), new Date('2018-12-21')],
      [new Date('2018-12-27'), new Date('2018-12-30')],
    ],
    reviewStars: 4,
    reviewCount: 346,
  },
];

for (let i = 2; i <= 50000; i += 1) {
  const randNumArrays = [];
  const addNums = () => {
    for (let j = 0; j < 6; j += 1) {
      const tempArr = [];
      while (tempArr.length < 8) {
        const randNum = Math.floor(Math.random() * 30) + 1;
        if (!tempArr.includes(randNum)) {
          tempArr.push(randNum);
        }
      }
      tempArr.sort((a, b) => a - b);
      randNumArrays.push(tempArr);
    }
  };
  addNums();

  const listingObj = {
    listingId: i,
    price: Math.floor(faker.commerce.price()),
    cleaningFee: Math.floor(faker.commerce.price()),
    minStay: Math.floor(Math.random() * 3) + 1,
    maxGuests: Math.floor(Math.random() * 5) + 1,
    lastUpdate: faker.date.recent(90),
    bookings: [
      [new Date(`2018-07-${randNumArrays[0][0]}`), new Date(`2018-07-${randNumArrays[0][1]}`)],
      [new Date(`2018-07-${randNumArrays[0][2]}`), new Date(`2018-07-${randNumArrays[0][3]}`)],
      [new Date(`2018-07-${randNumArrays[0][4]}`), new Date(`2018-07-${randNumArrays[0][5]}`)],
      [new Date(`2018-07-${randNumArrays[0][6]}`), new Date(`2018-07-${randNumArrays[0][7]}`)],

      [new Date(`2018-08-${randNumArrays[1][0]}`), new Date(`2018-08-${randNumArrays[1][1]}`)],
      [new Date(`2018-08-${randNumArrays[1][2]}`), new Date(`2018-08-${randNumArrays[1][3]}`)],
      [new Date(`2018-08-${randNumArrays[1][4]}`), new Date(`2018-08-${randNumArrays[1][5]}`)],
      [new Date(`2018-08-${randNumArrays[1][6]}`), new Date(`2018-08-${randNumArrays[1][7]}`)],

      [new Date(`2018-09-${randNumArrays[2][0]}`), new Date(`2018-09-${randNumArrays[2][1]}`)],
      [new Date(`2018-09-${randNumArrays[2][2]}`), new Date(`2018-09-${randNumArrays[2][3]}`)],
      [new Date(`2018-09-${randNumArrays[2][4]}`), new Date(`2018-09-${randNumArrays[2][5]}`)],
      [new Date(`2018-09-${randNumArrays[2][6]}`), new Date(`2018-09-${randNumArrays[2][7]}`)],

      [new Date(`2018-10-${randNumArrays[3][0]}`), new Date(`2018-10-${randNumArrays[3][1]}`)],
      [new Date(`2018-10-${randNumArrays[3][2]}`), new Date(`2018-10-${randNumArrays[3][3]}`)],
      [new Date(`2018-10-${randNumArrays[3][4]}`), new Date(`2018-10-${randNumArrays[3][5]}`)],
      [new Date(`2018-10-${randNumArrays[3][6]}`), new Date(`2018-10-${randNumArrays[3][7]}`)],

      [new Date(`2018-11-${randNumArrays[4][0]}`), new Date(`2018-11-${randNumArrays[4][1]}`)],
      [new Date(`2018-11-${randNumArrays[4][2]}`), new Date(`2018-11-${randNumArrays[4][3]}`)],
      [new Date(`2018-11-${randNumArrays[4][4]}`), new Date(`2018-11-${randNumArrays[4][5]}`)],
      [new Date(`2018-11-${randNumArrays[4][6]}`), new Date(`2018-11-${randNumArrays[4][7]}`)],

      [new Date(`2018-12-${randNumArrays[5][0]}`), new Date(`2018-12-${randNumArrays[5][1]}`)],
      [new Date(`2018-12-${randNumArrays[5][2]}`), new Date(`2018-12-${randNumArrays[5][3]}`)],
      [new Date(`2018-12-${randNumArrays[5][4]}`), new Date(`2018-12-${randNumArrays[5][5]}`)],
      [new Date(`2018-12-${randNumArrays[5][6]}`), new Date(`2018-12-${randNumArrays[5][7]}`)],
    ],
    reviewStars: Math.floor(Math.random() * 5) + 1,
    reviewCount: faker.random.number(),
  };
  hundredListings.push(listingObj);
}

module.exports = {
  listings: hundredListings,
};
