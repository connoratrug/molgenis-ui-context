// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  tags: ['cookie-wall'],
  before: function (browser) {
    browser.resizeWindow(1024, 786)
  },
  'show cookiewall and hide on click': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.jumbotron')
      .assert.elementPresent('.jumbotron button.btn')
      .click('.jumbotron button.btn')
      .pause(600)
      .assert.elementNotPresent('.jumbotron')
      .assert.elementNotPresent('.jumbotron button.btn')
      .end()
  },
  'wil not show cookiewall after click': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.jumbotron')
      .assert.elementPresent('.jumbotron button.btn')
      .click('.jumbotron button.btn')
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementNotPresent('.jumbotron')
      .assert.elementNotPresent('.jumbotron button.btn')
      .end()
  }
}
