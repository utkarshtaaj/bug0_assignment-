import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config) {
  // Launch a browser instance
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await context.storageState({ path: 'storageState.json' });

  try {
    await page.goto("https://automationexercise.com/", { timeout: 60000 });
  } catch (error) {
    throw error;
  } finally {
    await page.close();
    await browser.close();
  }

  // Save authentication state to a file
  

  // Close browser
  await browser.close();
}

export default globalSetup;
