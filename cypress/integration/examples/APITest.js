describe('My First Test Suite', function()
{
    it('My First API Test case', function()
    {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',
        {
            "name": "Learn Appium Automation with Java",
            "isbn": "bcdsss",
            "aisle": "22c7",
            "author": "John foe"
        }).then(function(response)
        {
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
        })
    })
})

//{
//    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTgxN2JlYzlmZDk5Yzg1ZThlZTIwYzciLCJ1c2VyRW1haWwiOiJhdGhhcnZhLmhpd2FzZTA3QGdtYWlsLmNvbSIsInVzZXJNb2JpbGUiOjg0MDg5MDI3NzgsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MDI5ODkzODcsImV4cCI6MTczNDU0Njk4N30.dXIrZYxfEHtxx6nVbBEjt344t2P1oEeE7gC2GzHIdmE",
//    "userId": "65817bec9fd99c85e8ee20c7",
//    "message": "Login Successfully"
//}