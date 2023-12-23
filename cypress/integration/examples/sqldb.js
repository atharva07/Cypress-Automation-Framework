/// <reference types="Cypress" />

context('Window', () => {
    let data
    it('Database Interaction', () => 
    {
        cy.sqlServer("select * from Persons").then(function(result)
        {
            //data = result
            console.log(result[1][3])
        })
    })

    //it('cy.wait() - wait for a specific amount of time', () => 
    //{
        //console.log(result[1][3])
        // cy.get('.wait-input1').type(data[0][2])
        // cy.wait(1000)
        // cy.get('.wait-input2').type(data[1][2])
        // cy.wait(1000)
        // cy.wait('.wait-input3').type('wait 1000ms after typing')
        // cy.wait(1000)

    //})
})