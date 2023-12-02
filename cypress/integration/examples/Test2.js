// cypress - spec file

/// <reference types="Cypress" />
describe('My Second Test Suite', function() 
{
    it('My Second Test case', function() 
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type='search']").type("ca")
        cy.wait(2000)
        // selenium 'get' hit url in browser, cypress 'get' acts like frindElement of Selenium

        // Parent Child. Accessing only one element from the all the elements.
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const vegText = $e1.find('h4.product-name').text()
            console.log(vegText)
            if (vegText.includes('Cashews'))
            {
                cy.wrap($e1).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})