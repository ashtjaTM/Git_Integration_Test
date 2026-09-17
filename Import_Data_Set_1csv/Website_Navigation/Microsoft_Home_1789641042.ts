import { test, expect } from '@playwright/test';

test("Microsoft Home_1789641042", async ({ page }) => {
  // Step 1: Navigate to https://www.microsoft.com/
  await page.goto('https://www.microsoft.com/');
  // Step 2: Click on Support
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  // Step 3: Click on "Report a support scam" from the Contact Us Card
  Not available
});
