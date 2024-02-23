import { BasePage } from "@pages/base.page";
import { BookItemComponent } from "@components/books/bookItem.component";

type UrlType = { authorId: string };
export class AuthorPage extends BasePage<UrlType> {
  url = (routes: UrlType) => `/app/#/author/${routes.authorId}`;

  readonly loader = this.locator(".loader");
  readonly booksItems = this.components(
    BookItemComponent,
    ".author-book-list .list-book-item",
  );
}
