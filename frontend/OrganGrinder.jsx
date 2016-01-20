AppDispatcher = require('./dispatcher/dispatcher');
KeyListener = require('./util/KeyListener');
React = require('react');
ReactDOM = require('react-dom');
Note = require('./util/Note.js');
KeyStore = require('./stores/KeyStore');
Organ = require('./components/Organ');


$(function () {
  var content = document.getElementById('content');

  ReactDOM.render(<Organ className="group" />, content);
});
