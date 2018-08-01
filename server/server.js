// IMPORT/////////////////////////////////////////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { findListing } = require('../db/index');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3002;

// APP METHODS///////////////////////////////////////////////////////

// look up morgan
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(express.static(path.join(__dirname, '../public')));
app.use('/rooms/:roomId/', express.static('public'));
// ROUTER METHODS////////////////////////////////////////////////////

// router.all('/', (req, res, next) => {
//   console.log('hello!');
//   res.render();
//   next();
// });

router.get('*', (req, res) => {
  //('/rooms/:roomId'
  let splitEndpoint = req.url.split('/');
  let listingId = splitEndpoint[2];
  console.log(listingId);
  // const { roomId } = req.params;
  // findListing(roomId, (err, data) => {
  //   if (err) {
  //     // res.status(500).send(err);
  //   } else {
  //     // res.send(data);
  //   }
  // });
});

// APP METHODS///////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
