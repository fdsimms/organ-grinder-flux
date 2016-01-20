var AppDispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({ noteName: key, actionType: "ADD_KEY" });
  },

  keyUnpressed: function (key) {
    AppDispatcher.dispatch({ noteName: key, actionType: "REMOVE_KEY" });
  },

  unpressKeys: function (keys) {
    AppDispatcher.dispatch({keys: keys, actionType: "REMOVE_KEYS"});
  }
};

module.exports = KeyActions;
