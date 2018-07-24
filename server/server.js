// IMPORT/////////////////////////////////////////////////////////////

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;

// APP METHODS///////////////////////////////////////////////////////

// look up morgan
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

// GET METHODS///////////////////////////////////////////////////////

app.get('/rooms/:roomId', (req, res) => {});

// APP METHODS///////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
