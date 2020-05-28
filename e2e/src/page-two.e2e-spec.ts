import { browser, logging, ElementArrayFinder, element, ExpectedConditions, by } from 'protractor';
import { PageTwoPage } from './page-two.po';

describe('Page two should behave asynchronously, and be css queryable', () => {
  let page: PageTwoPage;

  beforeEach(async () => {
    page = new PageTwoPage();
    await page.navigateTo();
    await browser.waitForAngular();
  });

  it('should display title', () => {
    expect(page.getTitleText()).toEqual('Page 2');
  });

  it('should display 200 items', async () => {
    await browser.wait(ExpectedConditions.presenceOf(page.getListItems().first()), 5000, 'Could not find element');
    const elementFinderArray: ElementArrayFinder = page.getListItems();
    expect(elementFinderArray.count()).toBe(200);
  });

  it('each item should display index + 1', () => {
    const elementFinderArray: ElementArrayFinder = page.getListItems();
    elementFinderArray.each((elementFinder, index) => {
      expect(elementFinder.getText()).toBe((index + 1).toString());
    });
  });

  afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});
});
