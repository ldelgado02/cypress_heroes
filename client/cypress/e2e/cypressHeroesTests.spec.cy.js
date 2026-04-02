import userData from '../fixtures/userData.json'
import LoginPage from '../pages/LoginPage'
import AdminPage from '../pages/AdminPage'
import HeroesPage from '../pages/HeroesPage'

const loginPage = new LoginPage()
const adminPage = new AdminPage()
const heroesPage = new HeroesPage()

const BASE_URL = 'http://localhost:3000/heroes'

describe('Cypress Heroes Tests', () => {

  context('Tests without being logged in', () => {
    beforeEach(() => {
      cy.visit(BASE_URL)
    })

    it('CT01 - Login - Success', () => {
      loginPage.login(userData.userSucess.username, userData.userSucess.password)
      loginPage.checkLoginSuccess()
    })

    it('CT02 - Login - Fail', () => {
      loginPage.login(userData.userFail.username, userData.userFail.password)
      loginPage.checkLoginFail()
    })
  })

  context('Tests with admin logged in', () => {
    beforeEach(() => {
      cy.session('admin logged', () => {
        cy.visit(BASE_URL)
        loginPage.login(userData.userSucess.username, userData.userSucess.password)
        loginPage.checkLoginSuccess()
      })
      cy.visit(BASE_URL)
    })

    it('CT03 - Register new hero and save', () => {
      adminPage.createHero('Blade', '100000', '987654321', '900', 'Super Strength')
      heroesPage.getHeroByName('Blade').should('be.visible')
    })

    it('CT04 - Update hero info', () => {
      adminPage.editHero(-1, {
        name: 'Dracula',
        price: '000001',
        fans: '123456789',
        saves: '009',
        power: 'Telekinesis',
        avatar: './cypress/fixtures/avatar02.jpg',
      })
      heroesPage.getHeroByName('Dracula').should('be.visible')
    })

    it('CT05 - Delete hero', () => {
      adminPage.deleteHero(-1)
    })

    it('CT06 - Recruit a hero', () => {
      heroesPage.recruitHero(0)
    })

    it('CT07 - Like a hero', () => {
      heroesPage.likeHero(0)
    })

    it('CT08 - Logout', () => {
      adminPage.logout()
    })
  })

})
