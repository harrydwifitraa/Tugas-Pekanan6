Feature: check function element on dashboard

    Background:
        Given I am on the login page
        When I login using valid data

    Scenario: check function sorting
        When sorting value is 'Price (low to high)'
        Then I verify items are sorted 'Price (low to high)' successfully
        When sorting value is 'Price (high to low)'
        Then I verify items are sorted 'Price (high to low)' successfully

    Scenario: check detail product page
        And I click product 'Sauce Labs Backpack'
        Then I go to product 'Sauce Labs Backpack' page

    Scenario: Check function add cart
        When I add item to cart 
        Then cart show amount item is 1
        And I add another item to the cart
        Then cart show amount item is 2