import { expect, test } from '@playwright/test';

test.describe('site navigation', () => {
  test('navigates to all pages and renders core content', async ({ page }) => {
    // ── Home ──────────────────────────────────────────────────────────
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Ethan Posner' })).toBeVisible();

    // ── Projects ──────────────────────────────────────────────────────
    await page.locator('a.MuiButton-root:has-text("Projects")').click();
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
    // At least one ProjectDetailsCard <article> rendered
    await expect(page.locator('article').first()).toBeVisible();

    // ── About ─────────────────────────────────────────────────────────
    await page.locator('a.MuiButton-root:has-text("About")').click();
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    // GitHub avatar image loaded
    await expect(page.locator('img[alt="Profile"]')).toBeVisible();

    // ── Resume ────────────────────────────────────────────────────────
    await page.locator('a.MuiButton-root:has-text("Resume")').click();
    await expect(page.getByRole('link', { name: /download resume/i })).toBeVisible();
    // PDF canvas renders (react-pdf may take a moment)
    await expect(page.locator('canvas').first()).toBeVisible({ timeout: 15_000 });

    // ── 404 ───────────────────────────────────────────────────────────
    await page.goto('/#/nonexistent');
    await expect(page.getByText('404 PAGE NOT FOUND')).toBeVisible();
  });

  test('dark mode toggle persists across navigation', async ({ page }) => {
    await page.goto('/');

    // Starts in light mode
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    // Toggle to dark
    await page.locator('.MuiFab-root').click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Navigate — dark mode survives route change
    await page.locator('a.MuiButton-root:has-text("Projects")').click();
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Toggle back to light
    await page.locator('.MuiFab-root').click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    // Navigate — light mode survives route change
    await page.locator('a.MuiButton-root:has-text("About")').click();
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('mobile hamburger menu opens and navigates', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Hamburger IconButton is visible at mobile breakpoint
    const hamburger = page.locator('.MuiIconButton-root');
    await expect(hamburger).toBeVisible();

    // Open the menu
    await hamburger.click();

    // Menu items appear (MUI Menu renders in a portal)
    const projectsMenuItem = page.getByRole('menuitem', { name: 'Projects' });
    await expect(projectsMenuItem).toBeVisible();

    // Navigate via menu item
    await projectsMenuItem.click();
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();

    // Menu closes after navigation (handleClose called)
    await expect(projectsMenuItem).not.toBeVisible();
  });
});