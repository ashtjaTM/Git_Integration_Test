import { test, expect } from '@playwright/test';

test("Positive: Login with valid credentials navigates to inventory", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the username field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the 'Login' button
  // Step 5: Verify the URL changes to https://www.saucedemo.com/inventory.html
});
