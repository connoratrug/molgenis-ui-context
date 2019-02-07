// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.externals({
      'jquery': 'jQuery',
      'bootstrap': 'bootstrap',
      'popper.js': 'Popper.js'
    })
  },
  devServer: {
    // In CI mode, Safari cannot contact "localhost", so as a workaround, run the dev server using the jenkins agent pod dns instead.
    host: process.env.JENKINS_AGENT_NAME || 'localhost',
    // Do not proxy in production to allow for mocking api response in e2e test ( e2e tests are run in production mode)
    proxy: process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:8080',
  }
}
