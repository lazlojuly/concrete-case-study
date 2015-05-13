describe('typing feedback feature of the terminal', function() {

  it('should read back repo list action message for a single username', function() {
    browser.get('http://localhost:3002/');

    element(by.model('usernames')).sendKeys('bennadel');
    var repoListActionTxt = element(by.css('.repo-list-txt'));
    expect(repoListActionTxt).toEqual(
      'Submit form to list the repositories of <kbd class="ng-binding">bennadel</kbd>');
  });

  it('should read back repo stars action message for a two usernames', function() {
    browser.get('http://localhost:3002/');

    element(by.model('usernames')).sendKeys('bennadel,joyent');
    var repoListActionTxt = element(by.css('.repo-list-txt'));

    var todoList = element.all(by.repeater('todo in todos'));
    expect(repoListActionTxt).toEqual('Submit form for star-fight between <kbd class="ng-binding">bennadel</kbd> and <kbd class="ng-binding">joyent</kbd>');
  });

});
