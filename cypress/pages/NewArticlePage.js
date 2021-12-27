import { By } from 'cypress-selectors';

class NewArticlePageSelectors {
  @By.Attribute('Article Title', { attribute: 'placeholder' }) static title;
  @By.Attribute("What's this article about?", { attribute: 'placeholder' }) static description;
  @By.Type('textarea') static articleBodyInput;
  @By.Attribute('Press Enter, Tab or Comma to add a tag', { attribute: 'placeholder' }) static tags;
  @By.Text.Partial('Publish') static publishButton;
}

class NewArticlePage {
  enterTitle(title) {
    NewArticlePageSelectors.title.type(title);
    return this;
  }

  enterDescription(desc) {
    NewArticlePageSelectors.description.type(desc);
    return this;
  }

  enterContent(body) {
    NewArticlePageSelectors.articleBodyInput.type(body);
    return this;
  }

  enterTags(tags) {
    for (const tag of tags) NewArticlePageSelectors.tags.type(`${tag}{enter}`);
    return this;
  }

  publish() {
    NewArticlePageSelectors.publishButton.click();
  }
}

export { NewArticlePage, NewArticlePageSelectors };
