var path = require('path');
var CountryInfo = require(path.join('..', 'data', 'country-info.json'));

module.exports = {
  get: function(alpha2) {
    alpha2 = alpha2 || '';
    alpha2 = alpha2.toUpperCase();
    return CountryInfo[alpha2];
  }
};
