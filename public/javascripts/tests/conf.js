exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['page-title','typing-feedback.js'],
  rootElement: '.gitHubClient',
  capabilities: {
    'browserName': 'chrome'
  }
};
