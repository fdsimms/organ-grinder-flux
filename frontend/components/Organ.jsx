var React = require('react'),
    ReactDOM = require('react-dom'),
    Key = require('./Key'),
    Tones = require('../constants/Tones'),
    Recorder = require('../components/Recorder');

var Organ = React.createClass({
  render: function () {

    var keys = Object.keys(Tones).map(function (noteName, idx) {
      return <Key noteName={noteName} key={idx} />;
    });


    return(
      <div>
        <ul className="organ">
          {keys}
        </ul>
        <Recorder className="recorder" />
      </div>
    );
  }
});

module.exports = Organ;
