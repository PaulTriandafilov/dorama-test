import { BasePage } from '../../../../base.page';
import { test } from '@playwright/test';

export class SignInPage extends BasePage {
  url = () => '/users/sign_in';

  readonly emailField = this.locator('#user_email');
  readonly passwordField = this.locator('#user_password');

  readonly signInButton = this.locator('input[type="submit"]');

  loginAs = async (email: string, password: string) => {
    await test.step(`Login with credentials ${email}/${password}`, async () => {
      await this.emailField.fill(email);
      await this.passwordField.fill(password);

      await this.signInButton.click();
    });
  };
}
