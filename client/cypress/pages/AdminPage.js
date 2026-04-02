class AdminPage {
  selectors = {
    createHeroButton: () => cy.get('button').contains('Create New Hero'),
    nameField: () => cy.get('[data-cy="nameInput"]'),
    priceField: () => cy.get('[data-cy="priceInput"]'),
    fansField: () => cy.get('[data-cy="fansInput"]'),
    savesField: () => cy.get('[data-cy="savesInput"]'),
    powersSelect: () => cy.get('[data-cy="powersSelect"]'),
    avatarField: () => cy.get('[data-cy="avatarFile"]'),
    submitButton: () => cy.get('button').contains('Submit'),
    editButton: () => cy.get('[data-cy="pencil"]'),
    deleteButtons: () => cy.get('[data-cy="trash"]'),
    confirmYesButton: () => cy.get('button').contains('Yes'),
    logoutButton: () => cy.get('button').contains('Logout'),
    loginButton: () => cy.get('button').contains('Login'),
  }

  createHero(name, price, fans, saves, power, avatarFixture = './cypress/fixtures/avatar01.jpg') {
    this.selectors.createHeroButton().should('be.visible').click()
    this.selectors.nameField().type(name)
    this.selectors.priceField().type(price)
    this.selectors.fansField().type(fans)
    this.selectors.savesField().type(saves)
    this.selectors.powersSelect().select(power)
    this.selectors.avatarField().selectFile(avatarFixture)
    this.selectors.submitButton().should('be.visible').click()
  }

  editHero(position, { name, price, fans, saves, power, avatarFixture } = {}) {
    this.selectors.editButton().eq(position).click()
    if (name) this.selectors.nameField().clear().type(name)
    if (price) this.selectors.priceField().clear().type(price)
    if (fans) this.selectors.fansField().clear().type(fans)
    if (saves) this.selectors.savesField().clear().type(saves)
    if (power) this.selectors.powersSelect().select(power)
    if (avatarFixture) this.selectors.avatarField().selectFile(avatarFixture)
    this.selectors.submitButton().should('be.visible').click()
  }

  deleteHero(position) {
    this.selectors.deleteButtons().eq(position).click()
    this.selectors.confirmYesButton().click()
  }

  logout() {
    this.selectors.logoutButton().click()
    this.selectors.loginButton().should('be.visible')
  }
}

export default AdminPage
