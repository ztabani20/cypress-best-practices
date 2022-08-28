// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import homePage from '../selectors/homePage.sel'
import topBar from '../selectors/topBar.sel'
import searchResultPage from '../selectors/searchResultPage.sel'
import searchBar from '../selectors/searchBar.sel'


Cypress.Commands.add('search', (desiredSearch, searchType) => { 

    cy.get('body').then(($body) => {
        if ($body.find(homePage.mainLogo).length) {
            cy.get(homePage.searchBar).clear()
            cy.typeInput(homePage.searchBar, desiredSearch)
            cy.clickBtn(homePage.searchBtn)
        } else {
            cy.get(topBar.topSearchBar).clear()
            cy.typeInput(topBar.topSearchBar, desiredSearch)
            cy.clickBtn(topBar.topSearchBtn)
        }
        if(searchType == 'text'){

        }else if(searchType == 'Images'){
            cy.clickBtn(searchBar.imageSearch)

        }else if(searchType == 'Videos'){
            cy.clickBtn(searchBar.videoSearch)

        }else if(searchType == 'News'){
            cy.clickBtn(searchBar.newsSearch)

        }
      })
})

 Cypress.Commands.add('changeLanguage', (desiredLanguage) => { 
    const currentLangauge = cy.get(homePage.languageLbl).invoke('text')
    cy.log(currentLangauge)
    cy.clickBtn(homePage.languageLbl)
    if (currentLangauge == desiredLanguage) {
        cy.clickBtn(homePage.languageLbl)
    }else{

    }
 })

 Cypress.Commands.add('clickBtn', (targetedBtn) => { 
    cy.get(targetedBtn).click()
 })

 Cypress.Commands.add('typeInput', (targetedInput, desiredText) => { 
    cy.get(targetedInput).type(desiredText)
 })
 