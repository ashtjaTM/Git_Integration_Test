import { test, expect } from '@playwright/test';

test("Edge Cases: Attempt to access inventory.html URL without login", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the email field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the login button
  // Step 5: Navigate to https://www.saucedemo.com/inventory.html
});
