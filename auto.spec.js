 import { test, expect } from '@playwright/test';

test('automation', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    await page.getByText('Signup / Login').click();

    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill('rondasruthi@gmail.com');

    await page.locator('input[data-qa="login-password"]').fill('sruthi@1234');

    await page.locator('button[data-qa="login-button"]').click();
    

});
