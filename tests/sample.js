//
// More information on how to write your tests can be found in the API reference:
// http://nightwatchjs.org/api

module.exports = {
  'Do a Google search for a Pink Floyd album': function (browser) {
    // Define our sample Page Object
    var sampleObject = browser.page.sample();
    // Perform the actual test
    sampleObject.navigate()
      .waitForElementVisible( 'body', 1000 )
      .assert.title('Google')
      .assert.visible('@searchInput')
      .setValue('@searchInput', 'The Piper at the Gates of Dawn')
      .click('@searchSubmit')
      .waitForElementVisible('@results', 5000)
      .verify.containsText('@results', 'Pink Floyd');
    // Quit the browser and end test
    browser.end();
  }
};
