import { test, expect } from '@playwright/test';

test("Apple Mac Page_1789641042", async ({ page }) => {
  // Step 1: Go to https://www.apple.com/
  await page.goto('https://www.apple.com/');
  // Step 2: Click on Search
  await page.getByRole('button', { name: 'Search apple.com' }).click();
  // Step 3: Enter "MacBook m5" in the search field
  await page.getByRole('textbox', { name: 'Search apple.com' }).fill('MacBook m5');
await expect(page.getByRole('textbox', { name: 'Search apple.com' })).toHaveValue('MacBook m5');
  // Step 4: Navigate to Accessories
  await page.getByLabel('Accessories', { exact: true }).click();
  // Step 5: Expand the Color Filter
  Unable to locate and click the Color filter expansion button on Accessories page despite multiple attempts with different selectors. The element for expanding Color filter is not found or not exposed in the current snapshot.
  // Step 6: Select Blue
  await page.getByLabel('Wrist Strap – Crisp Blue').getByRole('img', { name: 'Crisp Blue' }).click();
});
