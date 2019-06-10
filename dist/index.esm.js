import React from 'react';

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

export default useLocalStorage;
