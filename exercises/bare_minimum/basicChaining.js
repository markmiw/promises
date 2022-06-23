/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');
var {getGitHubProfileAsync} = require('./promisification.js')



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  var readFile = function(url) {
    return new Promise((resolve, refuse) => {
    fs.readFile(readFilePath, (err, data) => {
      if(err) {
        return refuse(err);
      }
      data = data.toString().split('\n');
      return resolve(data[0]);
    })
  });
};

var writeData = function(data) {
 return new Promise(function(resolve, refuse) {
    fs.writeFile(writeFilePath, JSON.stringify(data), (err) => {
      if (err) {
        return refuse(err);
      }
      return resolve();
    });
  });
};

  var errorHandler = function (error) {
    if(err) {
      console.error('error');
    }
  }

return readFile(readFilePath).then(getGitHubProfileAsync).then(writeData).catch('error');
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
