var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');
var url = 'https://en.wikipedia.org/wiki/ISO_3166-1';

request(url, function(error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var $table = $('table').eq(0);
    var mapping = {};

    $table.find('tr').each(function(i, elem) {
      var $tds = $(this).find('td');
      var countryInfo = {};

      if ($tds.length > 0) {
        var englishName = $tds.eq(0).text();
        var alpha2 = $tds.eq(1).text();
        var alpha3 = $tds.eq(2).text();
        var numericCode = $tds.eq(3).text();

        mapping[alpha2] = {
          name: englishName,
          alpha3: alpha3,
          numeric: numericCode
        };
      }
    });

    // Sorry, I don't believe wikipedia for this item
    mapping['TW'].name = 'Taiwan';

    fs.writeFileSync(path.join(__dirname, '..', 'data', 'country-info.json'), JSON.stringify(mapping), 'utf8');
  }
});
