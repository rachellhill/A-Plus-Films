/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit the page and render movies', () => {
    cy.get('.card__poster').should('have.length', 40)
  })

  it('should see some movie info on hover', () => {
    cy.get('.card__poster').first().trigger('mouseover').get('.card__hover-info').first().contains('Money Plane')
  });


  it('should be able to click on a single movie for more detailed info', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919')
    cy.get('.card__poster').first().trigger('mouseover').click().wait(3000)
    cy.get('.movie__info').contains('Money Plane')
  });

  it('should be able to click on a single different movie for more detailed info', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919')
    cy.get('.card__poster').last().trigger('mouseover').click().wait(3000)
    cy.get('.movie__info').contains('I Still Believe')
  });
})
