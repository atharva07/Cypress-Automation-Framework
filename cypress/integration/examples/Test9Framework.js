// cypress - spec file

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
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
        const homepage = new HomePage()
        const productpage = new ProductPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender).should('have.value','Male')
        homepage.getTwoWayDataBinding().should('have.value', this.data.name)
        homepage.getEditBox().should('have.attr','minlength','2')
        homepage.getEntreprenuer().should('be.disabled')
        // used to debug and stop the execution
        //cy.pause()
        homepage.getShopTab().click()
        

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)      
        });

        productpage.getCheckOutButton().click()
        
        // checkout code
        cy.contains("Checkout").click()
        cy.get("#country").type("India")
        Cypress.config("defaultCommandTimeout", 8000)
        cy.get(".suggestions > ul > li > a").click()
        cy.get(".checkbox").click()
        cy.get("input[type='submit']").click()
        //cy.get("alert").should("have.text","Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get(".alert").then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})