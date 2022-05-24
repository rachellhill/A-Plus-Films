
describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture : 'data'}).wait(1000)
  })
  
  it('should be able to visit the page and render movies', () => {
    cy.get('.card__poster').should('have.length', 6)
    cy.get('.card__poster').first().should('have.attr', 'src').should('include','https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })

  it('should see some movie info on hover', () => {
    cy.get('.card__poster').first().trigger('mouseover').get('.card__hover-info').contains('Money Plane')
    cy.get('.card__poster').first().trigger('mouseover').get('.card__hover-info').contains('2020-09-29')
    cy.get('.card__poster').first().trigger('mouseover').get('.card__hover-info').contains('6.9')
  });

  it('should be able to click on a single movie for more detailed info', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {fixture: 'movie'})
    cy.get('.card__poster').first().trigger('mouseover').click().wait(3000)
    cy.get('.movie__info').contains('Money Plane')
    cy.get('.movie__info').contains('6.9')
    cy.get('.movie__info').contains('Action')
    cy.url().should('eq', 'http://localhost:3000/694919')
  });

  it('should be able to click on a single different movie for more detailed info', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739', {fixture: 'movie2'})
    cy.get('.card__poster').last().trigger('mouseover').click().wait(3000)
    cy.get('.movie__info').contains('Cats')
    cy.get('.movie__info').contains('7.5')
    cy.get('.movie__info').contains('Comedy')
    cy.url().should('eq', 'http://localhost:3000/726739')
  });

  it('should be able to display a movies trailers', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739/videos', {fixture: 'trailers'})
    cy.get('.card__poster').last().trigger('mouseover').click().wait(3000)
    cy.get('.trailer').should('have.attr', 'href').should('eq', 'https://www.youtube.com/watch?v=ct5mQYE3Xk4')
  });

  it('should be able to click the home button and return to the home page', () => {
    cy.visit('http://localhost:3000/581392')
    cy.get('.nav__home-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should be able to display error fetches fail', () => {
    cy.visit('http://localhost:3000/badUrl')
    cy.get('.error-message').contains('Error loading')
  })
  
  it('should be able to go to a login page', () => {
    cy.get('.nav__login-button').click()
    cy.url().should('eq', 'http://localhost:3000/user/login')
  })

  it('should be able to successfully log in', () => {
    cy.visit('http://localhost:3000/user/login')
    cy.get('.login__username').type('rachel')
    cy.get('.nav__welcome-msg').contains('Welcome, Rachel')
    cy.get('.login__submit-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.card__watched-rating').contains('My rating')
  })

  it.only('allow logged in user to mark a movie as watched', () => {
    cy.visit('http://localhost:3000/user/login')
    cy.get('.login__username').type('rachel')
    cy.get('.login__submit-button').click()

    cy.intercept('POST', 'http://localhost:3001/api/v1/users/rachel', {fixture : 'post'}).wait(1000)
    cy.get('.card__watched-button').first().click()
    cy.get('.modal__rating-input').type('7.9')
    cy.get('.modal__submit-button').click()
    cy.get('.card__watched-rating').contains('My rating: 7.9')
  })
  
  
})
