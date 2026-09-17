import { test, expect } from '@playwright/test';

test("Negative: Search with gibberish/no-match term", async ({ page }) => {
  // Step 1: Navigate to {{ikea}}/us/en/
  // Step 2: Fill the 'What are you looking for?' search field with 'zzqxnonexistent12345'
  // Step 3: Click the 'Search' button
});
