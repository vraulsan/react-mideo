var axios = require('axios');
var React = require('react');

function getTitles (searchedTitle) {
  return axios.get('http://www.omdbapi.com/?s=' + searchedTitle)
};
function getDetails (imdbID) {
  return axios.get('http://www.omdbapi.com/?i=' + imdbID)
};

var helpers = {
  searchResults: function (searchedTitle) {
    var results = getTitles(searchedTitle)
    return results;
  },
  searchDetails: function (imdbID) {
    var details = getDetails(imdbID)
    return details;
  }
};


module.exports = helpers;