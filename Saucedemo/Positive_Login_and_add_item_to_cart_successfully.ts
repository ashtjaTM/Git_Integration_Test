import { test, expect } from '@playwright/test';

test("Positive: Login and add item to cart successfully", async ({ page }) => {
  // Step 1: Navigate to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');
  // Step 2: Fill the username field with 'standard_user'
  await page.locator('[data-test="username"]').fill('standard_user');
  // Step 3: Fill the password field with 'secret_sauce'
  await page.locator('[data-test="password"]').fill('secret_sauce');
  // Step 4: Click the 'Login' button
  await page.locator('[data-test="login-button"]').click();
  // Step 5: Click 'Add to Cart' on the first product
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  // Step 6: Click the cart icon or link to navigate to 'Your Cart'
  await page.locator('[data-test="shopping-cart-link"]').click();
  // Step 7: Click the "Open Menu" button.
  await page.getByRole('button', { name: 'Open Menu' }).click();
  // Step 8: Click on "Inventory" in the sidebar.
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  // Step 9: Click on "Add to cart" for the "Sauce Labs Bolt T-Shirt".
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  // Step 10: Click on "Add to Cart" for the "Test.allthethings() T-Shirt (Red)".
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  // Step 11: Select the option "Z to A" from the product sorting dropdown.
  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  // Step 12: Click on "shopping cart".
  await page.locator('[data-test="shopping-cart-link"]').click();
  // Step 13: Click on "Checkout".
  await page.locator('[data-test="checkout"]').click();
});
