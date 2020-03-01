import puppeteer, { CDPSession, Page, Browser } from 'puppeteer';
import { sendData } from '../utils/performance';
import { config } from '../config/config';
import { INFO } from '../utils/logging';

const URL = config.baseUrl;

describe('Initial test', () => {
  let browser: Browser;
  let page: Page;
  let client: CDPSession;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.pages().then(pages => pages[0]);
    client = await page.target().createCDPSession();
    await client.send('Performance.enable');
  });

  afterAll(async () => { await browser.close(); });

  test('Should load the home page', async () => {
    await page.goto(URL);

    INFO('Waiting for network to be idle.');

    INFO('Sending data to DB');
    await sendData(client, 'launch_homepage');
  });
});
