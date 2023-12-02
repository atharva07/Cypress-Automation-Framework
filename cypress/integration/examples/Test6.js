// cypress - spec file

/// <reference types="Cypress" />
describe('Looping through table dynamically', function() 
{
    it('Looping through table dynamically', function() 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const item = $e1.text()
            if (item.includes("Python"))
            {
                // use then to resovle the promise
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const pricetext = price.text()
                    expect(pricetext).to .equal('25')
                })
            }
        })
    })
})