import { Dorama } from "dorama";
import { HeaderComponent } from "./pages/components/header.component";

export abstract class BasePage extends Dorama.Page {
  readonly header = this.component(HeaderComponent, "header");
}
