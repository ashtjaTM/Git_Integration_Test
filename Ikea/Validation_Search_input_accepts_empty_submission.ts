import { test, expect } from '@playwright/test';

test("Validation: Search input accepts empty submission", async ({ page }) => {
  // Step 1: Navigate to https://www.ikea.com/us/en/
  await page.goto('https://www.ikea.com/us/en/');
  // Step 2: Focus on the search input field
  await page.getByRole('combobox', { name: 'Search by product' }).click();
  // Step 3: Ensure the search input field is empty
  await page.getByRole('combobox', { name: 'Search by product' }).fill('');
  // Step 4: Click the 'Search' button
  await page.getByRole('button', { name: 'Search IKEA products using a' }).click();
  // Step 5: Verify the URL remains https://www.ikea.com/us/en/
  await page.evaluate('() => window.location.href === \'https://www.ikea.com/us/en/\'');
});
