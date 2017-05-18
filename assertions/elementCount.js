/**
 * Counts the number of children an element has in the DOM.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.titleContains("Nightwatch");
 *    };
 * ```
 *
 * @method title
 * @param {string} expected The expected page title substring.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(selector, expected, msg) {

  /**
   * The message which will be used in the test output and
   * inside the XML reports
   * @type {string}
   */
  this.message = msg || util.format('Asserting that there are %d instance of <%s>', expected, selector);

  /**
   * A value to perform the assertion on. If a function is
   * defined, its result will be used.
   * @type {function|*}
   */
  this.expected = expected;

  /**
   * The method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   * @type {function}
   */
  this.pass = function(value) {
    return value === expected;
  };

  /**
   * The method which returns the value to be used on the
   * assertion. It is called with the result of the command's
   * callback as argument.
   * @type {function}
   */
  this.value = function(result) {
    return result.value.length;
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   * @type {function}
   */
  this.command = function(callback) {
    return this.api.elements(this.client.locateStrategy, selector, callback);
  };

};
