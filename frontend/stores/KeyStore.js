var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var KeyStore = new Store(AppDispatcher);

var _currentKeys = [];

var addKey = function (key) {
  if (!_currentKeys.includes(key)) {
    _currentKeys.push(key);
    KeyStore.__emitChange();
  }
};

var removeKey = function (key) {
  var idx = _currentKeys.indexOf(key);
  _currentKeys.splice(idx, 1);
  KeyStore.__emitChange();
};

var removeAllKeys = function () {
  _currentKeys = [];
  KeyStore.__emitChange();
};

KeyStore.all = function () {
  return _currentKeys.slice();
};

KeyStore.__onDispatch = function (payload) {
  if (payload.actionType === "ADD_KEY") {
    addKey(payload.noteName);
  } else if (payload.actionType === "REMOVE_KEY") {
    removeKey(payload.noteName);
  } else if (payload.actionType === "REMOVE_ALL_KEYS") {
    removeAllKeys();
  }
};

module.exports = KeyStore;
