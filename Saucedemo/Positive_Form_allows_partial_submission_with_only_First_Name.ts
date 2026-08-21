import { test, expect } from '@playwright/test';

test("Positive: Form allows partial submission with only First Name", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the email field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the login button
  // Step 5: Click the cart page link
  // Step 6: Click the 'Checkout' button
  // Step 7: Fill the 'First Name' field with 'Test'
  // Step 8: Leave the 'Last Name' field empty
  // Step 9: Leave the 'Zip/Postal Code' field empty
  // Step 10: Click the 'Continue' button
});
