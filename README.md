# node-country-info

This is a lightweight library which follows ISO-3166 standard to search needed information based on passing *ISO 3166-1 alpha-2* country codes.

# How to install

`npm install --save node-country-info`

# How to use

```javascript
var CountryInfo = require('node-country-info');
var info = CountryInfo.get('TW') // { name: 'Taiwan', alpha3: 'TWN', numeric: '158' }
```

# Author

Chia-Lung, Chen (EragonJ)

# License

MIT
