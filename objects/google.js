//
// More information on page objects can be found in the Nightwatch.js docs:
// http://nightwatchjs.org/guide#page-objects

module.exports = {
  url: 'https://google.com',
  sections: {
    search: {
      selector: 'form[role="search"]',
      elements: {
        input: {
          selector: 'input[type="text"]'
        },
        submit: {
          selector: 'input[type="submit"]'
        }
      }
    },
    results: {
      selector: '#main #res'
    }
  }
};
