import { test, expect } from '@playwright/test';

test('Verify that the title is TTA Cart', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("TTACart - Login");
});
