(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.useLocalStorage = factory(global.React));
}(this, function (React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

  return useLocalStorage;

}));
