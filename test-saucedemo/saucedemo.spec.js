import { test, expect } from '@playwright/test';

test.describe('Sauce Demo - Add to Cart and Logout', () => {

  test('User logs in, adds product, verifies cart, and logs out', async ({ page }) => {
    
    // 1. Navigate to the Sauce Demo website
    await page.goto('https://www.saucedemo.com/');

    // 2. Log in with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForTimeout(10000); // Wait 10 seconds to observe

    // 3. Add the first product to the cart
    const firstProduct = page.locator('.inventory_item').first();
    const productName = await firstProduct.locator('.inventory_item_name').textContent();
    await firstProduct.locator('button').click(); // Click "Add to cart"

    // 4. Go to the cart
    await page.click('.shopping_cart_link');

    // 5. Verify the product name in the cart
    const cartProductName = await page.locator('.cart_item .inventory_item_name').textContent();
    expect(cartProductName).toBe(productName);

    // 6. Log out
    await page.click('#react-burger-menu-btn'); // Open menu
    await page.click('#logout_sidebar_link'); // Click logout

    // 7. Verify the user is redirected to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});
