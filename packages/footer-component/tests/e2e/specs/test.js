// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  tags: ['UiContext'],
  before: function (browser) {
    browser.resizeWindow(1024, 786)
  },
  'display footer test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.footer')
      .assert.containsText('footer > div > div:nth-child(1)', 'some additionalMessage')
      .end()
  }
}
