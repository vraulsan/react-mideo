var axios = require('axios');
var React = require('react');

function getTitles (searchedTitle, searchedYear, typeToSearch) {
  return axios.get('http://www.omdbapi.com/?s=' + searchedTitle + '&y=' + searchedYear + '&type=' + typeToSearch)
};
function getDetails (imdbID) {
  return axios.get('http://www.omdbapi.com/?i=' + imdbID)
};

var helpers = {
  searchResults: function (searchedTitle, searchedYear, typeToSearch) {
    var results = getTitles(searchedTitle, searchedYear, typeToSearch)
    return results;
  },
  searchDetails: function (imdbID) {
    var details = getDetails(imdbID)
    return details;
  }
};


module.exports = helpers;