//
// More information on page objects can be found in the Nightwatch.js docs:
// http://nightwatchjs.org/guide#page-objects

module.exports = {
  url: 'https://google.com',
  elements: {
    searchForm: {
      selector: 'form'
    },
    searchInput: {
      selector: 'input[type=text]'
    },
    searchSubmit: {
      selector: 'input[type=submit]'
    },
    results: {
      selector: '#main #res'
    }
  }
};
