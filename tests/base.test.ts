import { test as base } from '@playwright/test';
import {IndexPage} from "../page_object/pages/pages/index.page";
import {SignInPage} from "../page_object/pages/pages/users/sign_in/signIn.page";
import {AppReadingPage} from "../page_object/pages/pages/app/reading/appReading.page";
import {AllAuthorsPage} from "../page_object/pages/pages/app/authors/all/allAuthors.page";


type Pages = {
  indexPage: IndexPage;
  signInPage: SignInPage;
  appReadingPage: AppReadingPage;
  allAuthorsPage: AllAuthorsPage;
};

export const test = base.extend<Pages>({
  indexPage: async ({ page }, use) => {
    await use(new IndexPage(page));
  },
  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page));
  },
  appReadingPage: async ({ page }, use) => {
    await use(new AppReadingPage(page));
  },
  allAuthorsPage: async ({ page }, use) => {
    await use(new AllAuthorsPage(page));
  },
});
