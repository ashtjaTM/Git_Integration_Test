import { test, expect } from '@playwright/test';

test("Positive: Form allows submission with all fields filled", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the email field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the Login button
  // Step 5: Click the Checkout button on the cart page
  // Step 6: Fill the First Name field with 'John'
  // Step 7: Fill the Last Name field with 'Doe'
  // Step 8: Fill the Zip/Postal Code field with '90210'
  // Step 9: Click the Continue button
  // Step 10: Verify the page navigates to https://www.saucedemo.com/checkout-step-two.html
});
