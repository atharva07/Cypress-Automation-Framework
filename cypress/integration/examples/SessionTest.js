/// <reference types="cypress" />
const neatCSV = require('neat-csv')

describe('JWT Session', () => {
    it('is logged in through local store', async () => 
    {
        // this is a custom command so for this we need resolve the promise. But for in-built commands
        // we don't need to resolve the promise.
        cy.LoginAPI().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client',
            {
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })

        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.get('[routerlink*="cart"]').click();
        cy.contains('Checkout').click();
        cy.get("[placeholder*='Country']").type("ind")
        cy.get(".ta-results button").each(($el,index,$list) =>
        {
            if($el.text() === " India")
            {
                // We cant directly click the element. First we wrap the element, and then we click the element.
                cy.wrap($el).click()
            }
        })
        cy.get(".action__submit").click();
        cy.wait(2000)
        cy.get('.order-summary button').click();

        
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_atharva.hiwase07.csv")
        .then(async(text) =>
        {
            const csv = await neatCSV(text)
            console.log(csv)

        })
        
    })
})