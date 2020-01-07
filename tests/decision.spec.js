const puppeteer = require('puppeteer');
const { sendData } = require('../utils/performance');

(async () => {
  const URL = 'https://d325ipv23yw3im.cloudfront.net/supplier/06941001'
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.pages().then(pages => pages[0]);
  const client = await page.target().createCDPSession();
  client.send('Performance.enable');

  await page.goto(URL);
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  const metrics = await page.metrics();
  console.log(metrics);
  await sendData(client, 'launch_homepage');

  await browser.close();
})();
