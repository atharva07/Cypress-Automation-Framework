Feature: End To End Ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add Items to cart 
    And Validate the total prices
    Then select the country submit and verfify Thankyou
    