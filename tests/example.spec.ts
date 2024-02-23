import { test } from './base.test';
import { expect } from '@playwright/test';

test('Sign in and go to all authors', async ({ indexPage, signInPage, appReadingPage, allAuthorsPage, page }) => {
  await indexPage.goto();

  await test.step(`Login as user`, async () => {
    const login = 'pavel.triandafilov@gmail.com';
    const password = 'oasis1991';

    await indexPage.header.signInButton.click();
    await expect(page).toHaveURL(signInPage.url());

    await signInPage.loginAs(login, password);
    await expect(page).toHaveURL(appReadingPage.url());
  });

  await test.step(`Go to all authors`, async () => {
    await allAuthorsPage.goto();

    const actualAuthorsCount = await allAuthorsPage.authorItems.count();
    expect(actualAuthorsCount).toBe(9);

    const authorsNames = await allAuthorsPage.authorItems.map(async item => await item.name.innerText());
    console.log(authorsNames);
  });
});
