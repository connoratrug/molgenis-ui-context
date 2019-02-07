// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  tags: ['UiContext'],
  before: function (browser) {
    browser.resizeWindow(1024, 786)
  },
  'display navbar test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.navbar')
      .assert.elementPresent('.navbar-brand')
      .assert.elementPresent('.navbar-expand-md')
      .assert.elementPresent('.nav-item.active')
      .assert.containsText('.active', 'Navigator')
      .resizeWindow(200, 400)
      .waitForElementVisible('.navbar-toggler-icon', 5000)
      .assert.cssClassNotPresent('.navbar.navbar-light.bg-light', '.navbar-expand-md')
      .end()
  }
}
