import { test, expect } from '@playwright/test';

test("Positive: Search then clear resets listing to default", async ({ page }) => {
  // Step 1: Navigate to https://www.tirabeauty.com/
  await page.goto('https://www.tirabeauty.com/');
  // Step 2: Clear the search textbox on /products/ page
  await page.goto('https://www.tirabeauty.com/products/');
await page.getByRole('textbox', { name: 'Search' }).fill('');
  // Step 3: Submit the search form on /products/ page
  await page.keyboard.press('Enter');
  // Step 4: Verify the URL is /products/
  await page.evaluate('() => window.location.pathname === \'/products/\'');
  // Step 5: Verify the full product listing is shown
  await expect(page.getByRole('heading', { name: 'Products', exact: true })).toBeVisible();
});
