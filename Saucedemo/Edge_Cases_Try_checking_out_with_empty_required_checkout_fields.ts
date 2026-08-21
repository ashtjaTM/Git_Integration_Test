import { test, expect } from '@playwright/test';

test("Edge Cases: Try checking out with empty required checkout fields", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the email field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the login button
  // Step 5: Add a product to the cart
  // Step 6: Click the cart icon
  // Step 7: Click the 'Checkout' button
  // Step 8: Leave the 'First Name' field empty
  // Step 9: Leave the 'Last Name' field empty
  // Step 10: Leave the 'Postal Code' field empty
  // Step 11: Click the 'Continue' button
});
