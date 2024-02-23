import { BasePage } from '../../../../../base.page';
import { AuthorItemComponent } from '../../../../components/authors/authorItem.component';

export class AllAuthorsPage extends BasePage {
  url = () => '/app/#/authors/all';

  readonly authorItems = this.components(AuthorItemComponent, '.authors-list .author-item');
}
