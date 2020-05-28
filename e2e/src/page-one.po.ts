import { browser, by, element, ElementArrayFinder } from 'protractor';

export class PageOnePage {
  navigateTo(): Promise<unknown> {
    return browser.get('page-one') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1.page-one-title')).getText() as Promise<string>;
  }

  getListItems(): ElementArrayFinder {
    return element.all(by.css('div.items ul li.list-item'));
  }
}
