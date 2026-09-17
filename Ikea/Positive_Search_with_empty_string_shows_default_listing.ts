import { test, expect } from '@playwright/test';

test("Positive: Search with empty string shows default listing", async ({ page }) => {
  // Step 1: Navigate to {{ikea}}/us/en/
  await page.goto('https://{{ikea}}/us/en/');
  // Step 2: Ensure the search input is empty
  await expect(page.getByRole('combobox', { name: 'Search by product' })).toHaveValue('');
  // Step 3: Click the 'Search' button
  await page.getByRole('button', { name: 'Search IKEA products using a' }).click();
  // Step 4: Click the "Close" button.
  await page.getByRole('button', { name: 'Close' }).click();
  // Step 5: Click on "Search by product".
  await page.getByRole('combobox', { name: 'Search by product' }).click();
  // Step 6: Fill the "Search by product" field with "bedsheet".
  await page.getByRole('combobox', { name: 'Search by product' }).fill('bedsheet');
  // Step 7: Click on "bedsheets".
  await page.getByRole('link', { name: 'bedsheets' }).click();
  // Step 8: Click on "ULLVIDE, Sheet set, light pink, Full/Double".
  await page.getByRole('link', { name: 'ULLVIDE, Sheet set, light pink, Full/Double', exact: true }).click();
});
