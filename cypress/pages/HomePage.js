import { By } from 'cypress-selectors';
import { LoginPage, NewArticlePage } from '.';

class NavItem {
  @By.Class('nav-item', { eq: 3 }) static userInfoNavItem;
}
class HomePageSelectors {
  @By.Text.Exact('Sign in') static loginPageLink;
  @By.Type('a', { parent: NavItem.userInfoNavItem }) static userInfoLink;
  @By.Text.Partial('New Article') static newArticleButton;
}

class HomePage {
  open() {
    cy.visit('/');
    return this;
  }

  goToLoginPage() {
    HomePageSelectors.loginPageLink.click();
    return new LoginPage();
  }

  goToNewArticlePage() {
    HomePageSelectors.newArticleButton.click();
    return new NewArticlePage();
  }

  goToProfilePage() {
    HomePageSelectors.userInfoLink.click();
  }
}

export { HomePage, HomePageSelectors };
