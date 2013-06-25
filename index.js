
/**
 * Module dependencies.
 */

var Emitter = require('emitter')
  , toArray = require('toarray')
  , Debug = require('debug');

/**
 * Sandbox global event emitter.
 */
var emitter = new Emitter(); //should we inverse its control? contructor?

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
  this.debug = Debug(namespace);
}


/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Sandbox.prototype.emit = function(event) {
  emitter.emit.apply(emitter, [this.namespace + ":" + event].concat(toArray(arguments, 1)));
};


/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Sandbox.prototype.on = function() {
  emitter.on.apply(emitter, arguments);
};


/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Sandbox.prototype.once = function() {
  emitter.once.apply(emitter, arguments); 
};


/**
 * Create a debugger with the constructor namespace.
 *
 * @param {String} message (console log like)
 * @return {Type}
 * @api public
 */

Sandbox.prototype.log = function() {
  this.debug.apply(null, arguments);
};