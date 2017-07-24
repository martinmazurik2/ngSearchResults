import { NgSearchResultPage } from './app.po';

describe('ng-search-result App', () => {
  let page: NgSearchResultPage;

  beforeEach(() => {
    page = new NgSearchResultPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
