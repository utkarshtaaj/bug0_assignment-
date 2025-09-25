import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  // await page.getByRole('link', { name: ' Signup / Login' }).click();
  // await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  // await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('utkarshtaaj@gmail.com');
  // await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  // await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});