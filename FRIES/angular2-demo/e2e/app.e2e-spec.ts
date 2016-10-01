import { Angular2DemoPage } from './app.po';

describe('angular2-demo App', function() {
  let page: Angular2DemoPage;

  beforeEach(() => {
    page = new Angular2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
