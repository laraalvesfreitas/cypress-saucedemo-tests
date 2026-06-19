const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,

  e2e: {
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
  },
})