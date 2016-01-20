var React = require('react'),
    ReactDOM = require('react-dom'),
    Key = require('./Key'),
    Tones = require('../constants/Tones');

var Organ = React.createClass({
  render: function () {

    var keys = Object.keys(Tones).map(function (noteName, idx) {
      return <Key noteName={noteName} key={idx} />;
    });


    return(
      <ul className="organ">
        {keys}
      </ul>
    );
  }
});

module.exports = Organ;
