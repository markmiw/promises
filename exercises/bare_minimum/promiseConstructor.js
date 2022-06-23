/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise((resolve, refuse) => {
fs.readFile(filePath, (err, data) => {
  if (err) {
    refuse(err);
  } else {
    data = data.toString().split('\n');
    resolve(data[0]);
  }
})
  })

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
return new Promise((resolve, refuse) => {
  request.get(url, (err, response, data) => {
    if(err) {
      refuse(err);
    } else {
      resolve(response.statusCode);
    }
  })
})
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
