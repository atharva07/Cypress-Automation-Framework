import { DataTable, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'

const homePage=new HomePage()
const productPage=new ProductPage()
let name
Given('I open Ecommerce page', () =>
{
    cy.visit(Cypress.env("url")+'/angularpractice/')
})

// when I add items to the cart
When('I add Items to cart', function()
{
    homePage.getShopTab().click()
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)      
    });

    productPage.getCheckOutButton().click()
})

// validate the total price
Then('Validate the total prices', () =>
{
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
})

Then('select the country submit and verfify Thankyou', () => 
{
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

When('I fill the form details', function() 
{
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
})

Then('validate the forms behaviour', function() 
{
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntreprenuer().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
})

Then('select the Shop page', () => 
{
    homePage.getShopTab().click()
})
