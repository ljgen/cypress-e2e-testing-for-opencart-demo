const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.opencart.com",
    specPattern: "cypress/e2e/**/*.cy.js", // Pattern to locate test files
    supportFile: "cypress/support/index.js", // Path to the support file
    fixturesFolder: "cypress/fixtures", // Folder where fixtures are stored
    screenshotsFolder: "cypress/screenshots", // Folder where screenshots are saved
    videosFolder: "cypress/videos", // Folder where videos are saved
    trashAssetsBeforeRuns: true, // Clean up old screenshots and videos before running tests
    screenshotOnRunFailure: true, // Take a screenshot on test failure
    defaultCommandTimeout: 10000, // Timeout for commands (10 seconds)
    failOnStatusCode: false, // Disable fail on status code to avoid failures on non-2xx status codes
    chromeWebSecurity: false, // Disable web security for cross-domain requests
  },
});
