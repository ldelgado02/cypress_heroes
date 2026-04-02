class LoginPage {
  selectors = {
    loginButton: () => cy.get('button').contains('Login'),
    emailField: () => cy.get('[data-cy="email"]'),
    passwordField: () => cy.get('[data-cy="password"]'),
    signInButton: () => cy.get('button').contains('Sign in'),
    errorMessage: () => cy.get('.text-red-500'),
    createNewHeroButton: () => cy.get('button').contains('Create New Hero'),
  }

  login(username, password) {
    this.selectors.loginButton().should('be.visible').click()
    this.selectors.emailField().type(username)
    this.selectors.passwordField().type(password)
    this.selectors.signInButton().should('be.visible').click()
  }

  checkLoginSuccess() {
    this.selectors.createNewHeroButton().should('be.visible')
  }

  checkLoginFail() {
    this.selectors.errorMessage().should('be.visible')
  }
}

export default LoginPage
