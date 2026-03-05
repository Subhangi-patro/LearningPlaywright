const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://example.com', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'example-screenshot.png' });
    console.log('Screenshot saved to example-screenshot.png');
    await browser.close();
  } catch (err) {
    console.error('Error running Playwright check:', err);
    process.exit(1);
  }
})();
