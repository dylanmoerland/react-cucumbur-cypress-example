import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

before(() => {
  cy.visit('/');
});

Given('the calculator is cleared', () => {
  cy.get('[data-cy=calculator-button-c]').click();
});

When('I add {string} and {string}', (a, b) => {
  cy.get(`[data-cy=calculator-button-${a}]`).click();
  cy.get('[data-cy="calculator-button-+"]').click();
  cy.get(`[data-cy=calculator-button-${b}]`).click();
  cy.get('[data-cy="calculator-button-="]').click();
});

When('I subtract {string} from {string}', (a, b) => {
  cy.get(`[data-cy=calculator-button-${b}]`).click();
  cy.get('[data-cy="calculator-button--"]').click();
  cy.get(`[data-cy=calculator-button-${a}]`).click();
  cy.get('[data-cy="calculator-button-="]').click();
});

Then('the answer is {string}', (a) => {
  cy.get('[data-cy=calculator-display-label]').invoke('text').should('equal', a);
});
