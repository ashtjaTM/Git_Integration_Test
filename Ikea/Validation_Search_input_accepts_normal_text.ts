import { test, expect } from '@playwright/test';

test("Validation: Search input accepts normal text", async ({ page }) => {
  // Step 1: Navigate to https://www.ikea.com/us/en/
  await page.goto('https://www.ikea.com/us/en/');
  // Step 2: Click the search input labeled 'What are you looking for?'
  await page.getByRole('combobox', { name: 'Search by product' }).click();
  // Step 3: Fill the search input with 'table'
  await page.getByRole('combobox', { name: 'Search by product' }).fill('table');
});
