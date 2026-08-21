import { test, expect } from '@playwright/test';

test("Positive: Verify order overview displays payment and shipping info", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  // Step 2: Fill the email field with 'standard_user'
  // Step 3: Fill the password field with 'secret_sauce'
  // Step 4: Click the login button
  // Step 5: Complete the checkout information to reach checkout-step-two.html
  // Step 6: Verify the presence of text 'Payment Information:'
  // Step 7: Verify the presence of text 'SauceCard #31337'
  // Step 8: Verify the presence of text 'Shipping Information:'
  // Step 9: Verify the presence of text 'Free Pony Express Delivery!'
});
