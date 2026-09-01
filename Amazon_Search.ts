import { test, expect } from '@playwright/test';

test("Amazon Search", async ({ page }) => {
  // Step 1: Navigate to www.amazon.com
  await page.goto('https://www.amazon.com');
  // Step 2: Fill the search bar with 'test'
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('test');
await expect(page.getByRole('searchbox', { name: 'Search Amazon' })).toHaveValue('test');
  // Step 3: Hit enter to search
  await page.keyboard.press('Enter');
  // Step 4: Fill the search bar with "Headsets"
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('Headsets');
await expect(page.getByRole('searchbox', { name: 'Search Amazon' })).toHaveValue('Headsets');
});
