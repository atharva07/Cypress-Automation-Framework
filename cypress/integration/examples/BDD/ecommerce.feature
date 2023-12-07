Feature: End To End Ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add Items to cart 
    And Validate the total prices
    Then select the country submit and verfify Thankyou

    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    Then validate the forms behaviour
    And select the Shop page

    
