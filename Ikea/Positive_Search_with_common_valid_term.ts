import { test, expect } from '@playwright/test';

test("Positive: Search with common valid term", async ({ page }) => {
  // Step 1: Navigate to {{ikea}}/us/en/
  await page.goto('https://{{ikea}}/us/en/');
  // Step 2: Fill the 'What are you looking for?' search field with 'test'
  await page.getByRole('combobox', { name: 'Search by product' }).fill('test');
  // Step 3: Click the 'Search' button
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  // Step 4: Click on the "Search by product" combobox.
  await page.getByRole('combobox', { name: 'Search by product' }).click();
  // Step 5: Click on "Clear the search input fieldSearch".
  await page.locator('div').filter({ hasText: /^Clear the search input fieldSearch$/ }).first().click();
  // Step 6: Fill "bedsheets" in the search input field.
  await page.getByRole('combobox', { name: 'Search by product' }).fill('bedsheets');
  // Step 7: Click on "bedsheets".
  await page.getByRole('link', { name: 'bedsheets' }).click();
  // Step 8: Click on "SOLFIBBLA, Sheet set, white green/stripe, Queen".
  await page.getByRole('link', { name: 'SOLFIBBLA, Sheet set, white green/stripe, Queen', exact: true }).click();
});
