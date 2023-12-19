/// <reference types="cypress" />

describe('JWT Session', () => {
    it('is logged in through local store', () => 
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
    })
})