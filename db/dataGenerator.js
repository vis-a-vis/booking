const faker = require('faker');

const hundredListings = [];
for (let i = 2 ; i <= 3; i += 1) {
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
};

console.log(hundredListings)
module.exports = {
  listings: hundredListings,
};
