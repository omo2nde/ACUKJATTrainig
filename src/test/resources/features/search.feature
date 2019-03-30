Feature: Google Search
  As a google search user
  I want to search for information I need
  So that Iam better informed

  Scenario: Search for an item
    Given I am on Google Search Page
    When i enter a search term "Ahmid"
    And I click on the search button
    Then I should be shown a list of results relating to my search term