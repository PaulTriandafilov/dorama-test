import { test } from "./base.test";
import { expect } from "@playwright/test";

const login = "";
const password = "";

test("Login and go to all authors", async ({
  indexPage,
  signInPage,
  appReadingPage,
  allAuthorsPage,
  page,
}) => {
  await test.step(`Login as user`, async () => {
    await indexPage.goto();

    await indexPage.header.signInButton.click();
    await expect(page).toHaveURL(signInPage.url());

    await signInPage.loginAs(login, password);
    await expect(page).toHaveURL(appReadingPage.url());
  });

  await test.step(`Go to all authors and check authors components`, async () => {
    await allAuthorsPage.goto();

    const actualAuthorsCount = await allAuthorsPage.authorItems.count();
    expect(actualAuthorsCount).toBe(9);

    const authorsNames = await allAuthorsPage.authorItems.map(
      async (item) => await item.name.innerText(),
    );
    console.log(authorsNames);
  });
});

test("Login and go to author 48", async ({
  indexPage,
  signInPage,
  appReadingPage,
  authorPage,
  page,
}) => {
  await test.step(`Login as user`, async () => {
    await indexPage.goto();

    await indexPage.header.signInButton.click();
    await expect(page).toHaveURL(signInPage.url());

    await signInPage.loginAs(login, password);
    await expect(page).toHaveURL(appReadingPage.url());
  });

  await test.step(`Go to author and check books`, async () => {
    await authorPage.goto({ authorId: "48" });

    await authorPage.loader.waitFor({ state: "hidden" });
    const actualBooksCount = await authorPage.booksItems.count();
    expect(actualBooksCount).toBe(100);
  });
});
