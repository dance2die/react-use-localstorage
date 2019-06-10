'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function useLocalStorage(key, initialValue) {
  if ( initialValue === void 0 ) initialValue = '';

  var ref = React.useState(function () {
    var value = localStorage.getItem(key) || initialValue;
    localStorage.setItem(key, value);
    return value;
  });
  var item = ref[0];
  var setValue = ref[1];

  var setItem = function (newValue) {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  return [item, setItem];
}

module.exports = useLocalStorage;
