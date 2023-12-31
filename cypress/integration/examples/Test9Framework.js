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
        //cy.once('uncaught:exception', () => false)
        const homepage = new HomePage()
        const productpage = new ProductPage()
        cy.visit(Cypress.env("url")+'/angularpractice/')

        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWayDataBinding().should('have.value', this.data.name)
        homepage.getEditBox().should('have.attr','minlength','2')
        homepage.getEntreprenuer().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homepage.getShopTab().click()
        

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)      
        });

        productpage.getCheckOutButton().click()
        
        var sum = 0
        cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {
            const actualPrice = $el.text()
            var res = actualPrice.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
            cy.log(res)
        }).then(function()
        {
            cy.log(sum)
        })
        
        // fetching total bill from the UI
        cy.get("h3 strong").then(function(element)
        {
            const totalPrice = element.text()
            var res = totalPrice.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        // checkout code
        cy.contains("Checkout").click()
        cy.get("#country").type("India")
        Cypress.config("defaultCommandTimeout", 10000)
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