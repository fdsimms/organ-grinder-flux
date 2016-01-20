var KeyStore = require('../stores/KeyStore');
var KeyActions = require('../actions/KeyActions');

var Track = function (attributes) {
  this.name = attributes.name;
  this.roll = (attributes.roll || []);
};

Track.prototype.startRecording = function () {
  this.roll = [];

  this.currentTime = Date.now();
};

Track.prototype.addNotes = function (notes) {
  notes = notes || KeyStore.all();
  var timeslice = Date.now() - this.currentTime;
  var notesTimeslice = {timeslice: timeslice, notes: notes};
  this.roll.push(notesTimeslice);
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  var that = this;

  if (this.interval) {
    return;
  }

  var playbackStartTime = Date.now();
  var currentNote = 0;

  function playStep () {

    if (currentNote < that.roll.length) {
      // all notes in roll, ensure they are in KeyStore
      that.roll[currentNote].notes.forEach(function (note) {
        KeyActions.keyPressed(note);
      });

      if (Date.now() - playbackStartTime > that.roll[currentNote].timeslice) {
        var nextNote = currentNote + 1;
        var nextKeys = that.roll[nextNote].notes;
        var keys = [];

        that.roll[currentNote].notes.forEach(function (note) {
          if (!nextKeys.includes(note)) {
            keys.push(note);
          }
        });

        KeyActions.unpressKeys(keys);

        currentNote++;
      }
    } else {
      debugger
      clearInterval(that.interval);
      delete that.interval;
    }
  }

  this.interval = setInterval(playStep, 10);
};

module.exports = Track;
