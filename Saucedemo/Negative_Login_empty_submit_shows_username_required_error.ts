import { test, expect } from '@playwright/test';

test("Negative: Login empty submit shows username required error", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the email field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the 'Login' button
  // Step 5: Click the 'Login' button without filling any fields
  // Step 6: Verify the error message 'Epic sadface: Username is required' appears on the page
});
