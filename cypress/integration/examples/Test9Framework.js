// cypress - spec file

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('Frames Example', function() 
{
    before(function(){
        // runs ones before all the tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })

    it('Demo Example', function() 
    {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get('select').select(this.data.gender).should('have.value','Male')
        cy.get(":nth-child(4) > .ng-pristine").should('have.value', this.data.name)
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
        cy.get("#inlineRadio3").should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()
        this.data.productName

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)      
        });
    })
})