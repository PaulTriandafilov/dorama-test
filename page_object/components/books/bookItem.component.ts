import { Dorama } from "dorama";

export class BookItemComponent extends Dorama.Component {
  readonly cover = this.locator(".cover");
  readonly title = this.locator(".list-book-item-title");
  readonly data = this.locator(".book-info-data");
}
