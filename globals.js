var chromedriver = require('chromedriver');

module.exports = {
  // Start the ChromeDriver running before running tests
  before : function(done) {
    chromedriver.start();
    done();
  },
  // Stop the ChromeDriver after running tests
  after : function(done) {
    chromedriver.stop();
    done();
  }
};
