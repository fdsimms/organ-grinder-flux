React = require('react');
ReactDOM = require('react-dom');
var KeyStore = require('../stores/KeyStore');
var TONES = require('../constants/Tones.js');

var Key = React.createClass({
  getInitialState: function () {
    return ({
      isPressedDown: false
    });
  },

  componentDidMount: function () {
    var noteName = this.props.noteName;
    var freq = TONES[noteName];
    this.note = new Note(freq);
    this.note.oscillatorNode.type = "square";
    KeyStore.addListener(this._keysChanged);
  },

  _keysChanged: function () {
    if (KeyStore.all().includes(this.props.noteName)) {
      this.setState({isPressedDown: true});
      this.note.start();
    } else {
      this.setState({isPressedDown: false});
      this.note.stop();
    }
  },

  componentWillUnmount: function () {
    KeyStore.remove(this._keysChanged);
  },

  render: function () {
    var className = "";

    if (this.state.isPressedDown) {
      className = "pressedDown";
    }

    return <li className={className}>{this.props.noteName}</li>;
  }
});

module.exports = Key;
