/// <reference types="Cypress" />

describe('My second back-end testing case', function()
{
    it('My Second Backend Testing Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        // there are 2 parameters in intercept method.
        // 1. request parameter.
        // 2. response parameter.
        //cy.intercept({requestObject}, {responseObject})
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
        (req) =>
        {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res) => 
            {
                expect(res.statusCode).to.equal(403)
            })
        }).as('dummyurl')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyurl')

        // length of the response array = rows of the table
    })
})