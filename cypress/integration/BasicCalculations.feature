Feature: As a user I want to do basic calculations the result in an answer, so I don't have to calculate it myself.

  Scenario: Adding
    Given the calculator is cleared
    When I add "5" and "4"
    Then the answer is "9"

  Scenario: Substracting
    Given the calculator is cleared
    When I subtract "4" from "6"
    Then the answer is "2"
