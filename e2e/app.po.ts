import { browser, element, by } from 'protractor/globals';

export class ConnmondashPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cmd-root h1')).getText();
  }
}
