import { test, expect } from '@playwright/test';

test("Negative: Login with invalid credentials shows mismatch error", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the username field with 'Test User'
  // Step 3: Fill the password field with 'TestPass!234'
  // Step 4: Click the 'Login' button
  // Step 5: Verify the error message 'Epic sadface: Username and password do not match any user in this service' appears
});
