/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      callback(err);
    } else {
      data = data.toString().split('\n');
      callback(err, data[0]);
    }
  })
  // TODO

};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
 request.get(url, (error, response, data) => {
  if (error) {
    callback(error);
  } else {
    //console.log('response ',response.statusCode, 'data ', data.toString());
    callback(error, response.statusCode);
  }
 })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
