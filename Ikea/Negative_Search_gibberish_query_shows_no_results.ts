import { test, expect } from '@playwright/test';

test("Negative: Search gibberish query shows no results", async ({ page }) => {
  // Step 1: Navigate to https://www.ikea.com/us/en/
  // Step 2: Fill the 'What are you looking for?' field with 'no-results query'
  // Step 3: Submit the search
});
