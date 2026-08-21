import { test, expect } from '@playwright/test';

test("GitHub Sign In Page_1787257598", async ({ page }) => {
  // Step 1: Go to https://github.com/
  await page.goto('https://github.com/');
  // Step 2: Click Resources
  await page.getByRole('button', { name: 'Resources' }).click();
  // Step 3: Navigate to Software Development Section
  await page.getByRole('link', { name: 'Software Development' }).click();
  // Step 4: Scroll down on the "Software Development" page and click on "What is an SDK?" Card
  await page.goto('https://github.com/');
await page.getByRole('button', { name: 'Resources' }).click();
await page.getByRole('link', { name: 'What is an SDK?' }).click();
});
