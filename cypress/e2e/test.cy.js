/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

import homePage from '../selectors/homePage.sel'
import searchResultPage from '../selectors/searchResultPage.sel'
import clientCred from '../fixtures/example.json'

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://google.com')
    })

    it('Verify if text search is working', () => {
      cy.changeLanguage('English')
      cy.search('cypress.io','Text')
      cy.search(clientCred.testText, 'Text')
/*       cy.get(searchResultPage.firstResultDomain).should('to.contain','https://www.cypress.io')
      // Test passing text from fixture 
      cy.search(clientCred.testText, 'Text') */

    })

    it('Verify if image search is working', () => {
      cy.changeLanguage('العربية')
      cy.search('cypress.io','Images')

    })

   /*  it('Verify if video search is working', () => {
      cy.changeLanguage('English')
      cy.search('cypress.io', 'Videos')

    })

    it('Verify if news search is working', () => {
      cy.changeLanguage('English')
      cy.search('cypress.io', 'News')

    }) */

  })
  