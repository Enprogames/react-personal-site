import { expect, test } from '@playwright/test';

test('homepage banner image loads without 404', async ({ page }) => {
  // Navigate to home
  await page.goto('/');

  // Assert the banner <img> exists
  const img = page.locator('img[alt="banner"]');
  await expect(img).toBeVisible();
  const src = await img.getAttribute('src');
  expect(src).toBeTruthy();

  // Verify the asset referenced by the element is served with 200 OK
  const assetResponse = await page.request.get(src!);
  expect(assetResponse.ok()).toBe(true);
  const contentType = assetResponse.headers()['content-type'] || assetResponse.headers()['Content-Type'];
  expect(contentType).toBeTruthy();
  expect(contentType?.startsWith('image/')).toBe(true);

  // Wait for the image element to finish loading
  // Handle both cached and non-cached cases
  await page.waitForFunction((sel) => {
    const el = document.querySelector(sel) as HTMLImageElement | null;
    return !!el && el.complete;
  }, 'img[alt="banner"]');

  // And confirm the image actually rendered (naturalWidth > 0)
  const naturalWidth = await img.evaluate((el) => (el as HTMLImageElement).naturalWidth);
  expect(naturalWidth).toBeGreaterThan(0);
});
