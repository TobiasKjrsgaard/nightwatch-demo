//
// More information on how to write your tests can be found in the API reference:
// http://nightwatchjs.org/api

module.exports = {
  'Do a Google search for a Pink Floyd album': function (browser) {
    // Define our sample Page Object and Sections
    var google = browser.page.google();
    var search = google.section.search;
    // Navigate to the page and verify its title
    google.navigate();
    google.assert.titleContains('Google');
    // Check for the expected elements in markup
    google.expect.element('body').to.be.visible.before(1000);
    google.expect.section('@search').to.be.visible;
    search.expect.element('@input').to.be.visible;
    search.expect.element('@submit').to.be.visible;
    // Fill in the search form and submit it
    search.setValue('@input', 'The Piper at the Gates of Dawn');
    search.submitForm('@submit');
    // Check for the expected results within five seconds
    google.expect.section('@results').to.be.visible.before(5000);
    google.expect.section('@results').text.to.contain('Pink Floyd');
    // Quit the browser and end test
    browser.end();
  }
};
