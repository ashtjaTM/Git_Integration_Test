import { test, expect } from '@playwright/test';

test("Positive: Search for 'test' navigates to products page", async ({ page }) => {
  // Step 1: Navigate to https://www.tirabeauty.com/
  // Step 2: Fill the search box labeled 'Search' with 'test'
  // Step 3: Submit the search by pressing Enter or clicking the search button
  // Step 4: Verify the URL is https://www.tirabeauty.com/products/?q=test
});
