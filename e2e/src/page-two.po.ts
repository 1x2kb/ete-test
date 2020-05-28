import { browser, by, element, ElementArrayFinder } from 'protractor';

export class PageTwoPage {
  navigateTo(): Promise<unknown> {
    return browser.get('page-two') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1.page-two-title')).getText() as Promise<string>;
  }

  getListItems(): ElementArrayFinder {
    return element.all(by.css('div.list-item-container ul li.list-item'));
  }
}
