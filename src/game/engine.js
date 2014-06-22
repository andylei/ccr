var _ = require('lodash');

function gamepiece(token) {
  this._token = token;
  this._position = 0;

  return this;
}
gamepiece.prototype = {
  get token() {
    return this._token;
  },
  get position() {
    return this._position;
  }
  set position(pos) {
    return this._position = pos;
  }
};

function gamespace(tokens) {
  this._tokens = tokens;
  this._tick = 0;

  this._height = 100;
  this._pieces = {0: [], 1: [], 2: [], 3: []};

  this._prog = [];

  return this;
}
gamespace.prototype = {
  tick: function(move) {
    this._tick += 1;

    // maybe spawn new pieces
    for (var i = 0; i < 4; i++) {
      if (Math.random() < 0.05) {
        this._pieces[i].push(new gamepiece(this._randomToken()));
      }
    }

    // move pieces up the board
    
    // if there is a move, try and match it to a piece
  },
  _randomToken: function() {
    var n = this._tokens.length;
    return this._tokens[Math.floor(Math.random() * n)];
  }
};

