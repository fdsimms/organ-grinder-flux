var React = require('react'),
    ReactDOM = require('react-dom'),
    Track = require('../util/Track');
    KeyStore = require('../stores/KeyStore');


var Recorder = React.createClass({
  getInitialState: function () {
    return({ isRecording: false, track: new Track({})});
  },

  // componentDidMount: function () {
  //   KeyStore.addListener(this._keysChanged);
  // },

  _keysChanged: function () {
    this.state.track.addNotes(KeyStore.all());
  },

  handleRecordClick: function () {
    this.listenerToken = KeyStore.addListener(this._keysChanged);
    this.state.track.startRecording();
    this.setState({isRecording: true});
  },

  handleStopClick: function () {
    this.listenerToken.remove(this._keysChanged);
    this.state.track.stopRecording();
    this.setState({isRecording: false});
  },

  handlePlayClick: function () {
    if (this.state.isRecording) {
      this.handleStopClick();
    }

    this.state.track.play();
  },

  render: function () {
    var recordButton;
      if (this.state.isRecording) {
        recordButton = <button onClick={this.handleStopClick}>Stop</button>;
      } else {
        recordButton = <button onClick={this.handleRecordClick}>Record</button>;
      }

    return(
      <div className="buttons">
        {recordButton}
        <button onClick={this.handlePlayClick}>Play</button>
      </div>
    );
  }

});


module.exports = Recorder;
