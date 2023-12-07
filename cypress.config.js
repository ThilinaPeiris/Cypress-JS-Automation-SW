const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },

  e2e: {
    baseUrl:'https://www.amazon.com/',
    specPattern: "cypress/e2e/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
     
    },
  },
});
