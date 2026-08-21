import { test, expect } from '@playwright/test';

test("Test 1", async ({ page }) => {
  // Step 1: Navigate to http://www.google.com
  await page.goto('http://www.google.com');
  // Step 2: Fill the search bar with "Testing Mavens"
  await page.getByRole('combobox', { name: 'Search' }).fill('Testing Mavens');
  // Step 3: Hit Enter
  await page.keyboard.press('Enter');
});
