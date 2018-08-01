// IMPORT/////////////////////////////////////////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { findListing } = require('../db/index');

const app = express();
const port = process.env.PORT || 3002;

// APP METHODS///////////////////////////////////////////////////////

// look up morgan
app.use(express.static(path.join(__dirname, '../public')));
app.use('/rooms/:roomId/', express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTER METHODS////////////////////////////////////////////////////

app.get('/window/rooms/:roomId', (req, res) => {
  const { roomId } = req.params;
  findListing(roomId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

// APP METHODS///////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
