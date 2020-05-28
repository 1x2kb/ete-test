import { browser, logging, ElementArrayFinder, element } from 'protractor';
import { PageOnePage } from './page-one.po';

let page: PageOnePage;

describe('Page one should behave synchronously, and be css queryable', () => {
  beforeEach(() => {
    page = new PageOnePage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Page 1');
  });

  it('should display 200 items', () => {
    page.navigateTo();
    const elementFinderArray: ElementArrayFinder = page.getListItems();
    expect(elementFinderArray.count()).toBe(200);
  });

  it('each item should display index + 1', () => {
    page.navigateTo();
    const elementFinderArray: ElementArrayFinder = page.getListItems();
    elementFinderArray.each((elementFinder, index) => {
      expect(elementFinder.getText()).toBe((index + 1).toString());
    });
  });
});

afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});
