# Cypress-JS-Automation-SW
Cypress-JS-Automation-SW

Used Mochawesome HTML Reports :
Cypress configuration :
  Run the below command in terminal:
  npm i -D mochawesome mochawesome-merge mochawesome-report-generator

  In the cypress.config.js add the reporter settings :

  const { defineConfig } = require("cypress");
  module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },
  })
