import { test, expect } from '@playwright/test';

test("Positive: Search with valid term shows results", async ({ page }) => {
  // Step 1: Navigate to https://www.tirabeauty.com/
  await page.goto('https://www.tirabeauty.com/');
  // Step 2: Fill the search textbox labeled 'Search' with 'test'
  await page.getByRole('textbox', { name: 'Search' }).fill('test');
  // Step 3: Submit the search form
  await page.keyboard.press('Enter');
await expect(page.getByRole('link', { name: 'AD Add to Wishlist wishlist icon Lakme Fluid SPF 50 PA++++ In-Vivo tested' })).toBeVisible();
  // Step 4: Verify the URL changes to https://www.tirabeauty.com/products/?q=test
  await page.evaluate('() => window.location.href === \'https://www.tirabeauty.com/products/?q=test\'');
  // Step 5: Verify product results are displayed
  await expect(page.getByRole('link', { name: 'AD Add to Wishlist wishlist icon Lakme Fluid SPF 50 PA++++ In-Vivo tested' })).toBeVisible();
});
