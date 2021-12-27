import { By } from 'cypress-selectors';

class ProfilePageContainer {
  @By.Class('container') static container;
}

class ProfilePageRecentArticle {
  @By.Class('article-preview', { parent: ProfilePageContainer.container, eq: 0 }) static recentArticle;
}

class ArticlePageSelectors {
  @By.Type('h1', { eq: 0 }) static title;
  @By.Type('h2') static content;
  @By.Class('tag-list') static tags;
}

class ProfilePageSelectors {
  @By.Type('h1', { parent: ProfilePageRecentArticle.recentArticle }) static title;
  @By.Type('p', { parent: ProfilePageRecentArticle.recentArticle }) static description;
  @By.Type('ul', { parent: ProfilePageRecentArticle.recentArticle }) static tagList;
}

export { ArticlePageSelectors, ProfilePageSelectors };
