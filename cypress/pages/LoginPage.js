import { By } from 'cypress-selectors';
import { HomePage } from '.';

class LoginPageSelectors {
  @By.Attribute('email', { attribute: 'type' }) static emailInput;
  @By.Attribute('password', { attribute: 'type' }) static passwordInput;
  @By.Text.Exact('Sign in', { eq: 2 }) static signInButton;
}

class LoginPage {
  login(email = Cypress.env('email'), password = Cypress.env('password')) {
    LoginPageSelectors.emailInput.type(email);
    LoginPageSelectors.passwordInput.type(password);
    LoginPageSelectors.signInButton.click();
    return new HomePage();
  }
}

export { LoginPage, LoginPageSelectors };
