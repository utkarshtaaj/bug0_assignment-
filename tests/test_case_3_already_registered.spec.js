import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 500,
    width: 700
  }
});

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Utkarsh Singh');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('utkarshtaaj@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByText('Email Address already exist!').click();
});