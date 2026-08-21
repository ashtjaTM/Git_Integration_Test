import { test, expect } from '@playwright/test';

test("Edge Cases: Add same product multiple times to cart", async ({ page }) => {
  // Step 1: Navigate to https://www.ikea.com/us/en/
  // Step 2: Search for 'GÖRSNYGG Storage case'
  // Step 3: Click on the 'GÖRSNYGG Storage case' product
  // Step 4: Click the 'Add to cart' button
  // Step 5: Click the 'Add to cart' button again
  // Step 6: Check the cart for the quantity of 'GÖRSNYGG Storage case'
});
