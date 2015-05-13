describe('App Title', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3002/');
    expect(browser.getTitle()).toEqual('GitHub Client');
  });
});
