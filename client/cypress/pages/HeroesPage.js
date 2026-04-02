class HeroesPage {
  selectors = {
    heroNames: () => cy.get('[data-cy="name"]'),
    likeButtons: () => cy.get('[data-cy="like"]'),
    recruitButtons: () => cy.get('[data-cy="money"]'),
    confirmYesButton: () => cy.get('button').contains('Yes'),
  }

  getHeroByName(name) {
    return this.selectors.heroNames().contains(name)
  }

  likeHero(position) {
    this.selectors.likeButtons().eq(position).click()
  }

  recruitHero(position) {
    this.selectors.recruitButtons().eq(position).click()
    this.selectors.confirmYesButton().click()
  }
}

export default HeroesPage
