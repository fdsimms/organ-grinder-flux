var AppDispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function (key) {
    debugger
    AppDispatcher.dispatch({ noteName: key, actionType: "ADD_KEY" });
  },

  keyUnpressed: function (key) {
    AppDispatcher.dispatch({ noteName: key, actionType: "REMOVE_KEY" });
  }
};

module.exports = KeyActions;
