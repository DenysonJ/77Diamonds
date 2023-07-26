const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  numTestsKeptInMemory: 0,
  watchForFileChanges: false,
  viewportWidth: 1060,
  viewportHeight: 760,
  retries: 1,
  e2e: {
    baseUrl: 'https://testertest.77diamondstest.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
