import { test, expect } from '@playwright/test';

test('automation', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');

    await page.getByRole('link', { name: 'Dropdown', exact: true }).click();
    

    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');

});


