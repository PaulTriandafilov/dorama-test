import { Dorama } from "dorama";
import { HeaderComponent } from "@components/header.component";

export abstract class BasePage<
  T extends Record<string, string> = Record<string, string>,
> extends Dorama.Page {
  readonly header = this.component(HeaderComponent, "header");
}
