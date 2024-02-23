import { Dorama } from 'dorama';

export class AuthorItemComponent extends Dorama.Component {
  readonly name = this.locator('.author-name a');
  readonly booksCount = this.locator('.author-books-count');
}
