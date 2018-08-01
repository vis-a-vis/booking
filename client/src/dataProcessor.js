// IMPORT/////////////////////////////////////////////////////////////

const axios = require('axios');

// const BASE_URL = 'http://localhost:3002';

// AJAX METHODS//////////////////////////////////////////////////////

const getData = (endpoint, callback) => {
  let splitEndpoint = endpoint.split('/');
  let listingId = splitEndpoint[2];
  axios({
    method: 'get',
    url: '/',
    params: {
      listingId: listingId,
    }
  })
    .then(response => callback(null, response))
    .catch(error => callback(error, null));
};

const putData = (endpoint, callback) => {
  axios({
    method: 'put',
    url: endpoint,
  })
    .then(response => callback(null, response))
    .catch(error => callback(error, null));
};

// EXPORT////////////////////////////////////////////////////////////

const methods = {
  getData,
  putData,
};

export default methods;
