const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  e2e: {
    baseUrl:
      "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
    specPattern: "cypress/e2e/**/*.js",
    setupNodeEvents(on, config) {
    },
  },
});
