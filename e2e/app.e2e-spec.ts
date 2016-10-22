import { ConnmondashPage } from './app.po';

describe('connmondash App', function() {
  let page: ConnmondashPage;

  beforeEach(() => {
    page = new ConnmondashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cmd works!');
  });
});
