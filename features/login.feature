Feature: Login Flow 

    Background:
        Given I am on the login page

    Scenario: User can't login using empty password
        When I input username as "<username>" and password as "<password>"
        And I click on button login
        Then appear error message password null
            Examples:
                | username      | password      |
                | standard_user |               |

    Scenario: User can't login using invalid password
        When I input username as "<username>" and password as "<password>"
        And I click on button login
        Then appear error message password invalid
            Examples:
                | username      | password      |
                | standard_user | janji jiwa    |

    Scenario: User success login
        When I input username as "<username>" and password as "<password>"
        And I click on button login
        Then I navigate to dashboard page
            Examples:
                | username      | password      |
                | standard_user | secret_sauce  |
