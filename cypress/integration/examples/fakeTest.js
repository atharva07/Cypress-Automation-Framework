/// <reference types="Cypress" />

describe('My frist test suite', function()
{
    it('My FirstTest Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        // there are 2 parameters in intercept method.
        // 1. request parameter.
        // 2. response parameter.
        //cy.intercept({requestObject}, {responseObject})
        cy.intercept({
            method: 'GET',
            url: ' https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 
        {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }
            ]
        }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals')
        cy.get('p').should('have.text','Oops only 1 Book available')

        // length of the response array = rows of the table
        
    })
})