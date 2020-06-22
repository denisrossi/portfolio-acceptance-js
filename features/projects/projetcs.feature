Feature: Projects

  Scenario: Visit the project page
    When Addison navigates to https://denisrossi.github.io/projects
    Then they should see at least 2 article
