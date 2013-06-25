
/**
 * Module dependencies.
 */

var index = require('emitter');

/**
 * Expose `Sandbox`.
 */

module.exports = Sandbox;

/**
 * Initialize a new `Sandbox`.
 *
 * @api public
 */

function Sandbox(namespace) {
  this.namespace = namespace;
}

Sandbox.prototype.emit = function() {
  
};

Sandbox.prototype.on = function() {
  // body...
};

Sandbox.prototype.once = function() {
  // body...
};