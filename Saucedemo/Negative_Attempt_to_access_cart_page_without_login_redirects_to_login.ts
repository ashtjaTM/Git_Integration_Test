import { test, expect } from '@playwright/test';

test("Negative: Attempt to access cart page without login redirects to login", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the email field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the login button
  // Step 5: Navigate to https://www.saucedemo.com/cart.html
});
