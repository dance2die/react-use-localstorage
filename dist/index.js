'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-use-localstorage.cjs.production.js');
} else {
  module.exports = require('./react-use-localstorage.cjs.development.js');
}
