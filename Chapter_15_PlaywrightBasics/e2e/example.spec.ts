import { test, expect } from '@playwright/test';

test('Verify that the title is TTA Cart', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("TTACart - Login");
});


// Fixtures in Playwright are a way to set up and provide reusable objects, data, or state for your tests. They help you avoid repeating the same setup code in every test.

// Think of a fixture as a helper that prepares everything your test needs before it runs and cleans up afterward.