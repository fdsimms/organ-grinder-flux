var AppDispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({ noteName: key, actionType: "ADD_KEY" });
  },

  keyUnpressed: function (key) {
    AppDispatcher.dispatch({ noteName: key, actionType: "REMOVE_KEY" });
  },

  unpressAllKeys: function () {
    AppDispatcher.dispatch({ actionType: "REMOVE_ALL_KEYS"});
  }
};

module.exports = KeyActions;
