import { YifyPage } from './app.po';

describe('yify App', () => {
  let page: YifyPage;

  beforeEach(() => {
    page = new YifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
