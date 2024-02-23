import { BasePage } from "@pages/base.page";

export class IndexPage extends BasePage {
  url = () => "/";

  readonly startNowButton = this.locator("a");
}
