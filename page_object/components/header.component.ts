import { Dorama } from 'dorama';

export class HeaderComponent extends Dorama.Component {
  readonly signInButton = this.locator('.menu a', { hasText: 'SIGN IN' });
}
