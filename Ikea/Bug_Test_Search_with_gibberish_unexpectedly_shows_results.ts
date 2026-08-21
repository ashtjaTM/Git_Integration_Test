import { test, expect } from '@playwright/test';

test("Bug Test: Search with gibberish unexpectedly shows results", async ({ page }) => {
  // Step 1: Navigate to https://www.ikea.com/us/en/
  // Step 2: Fill the search field with 'no-results query'
  // Step 3: Submit the search
});
