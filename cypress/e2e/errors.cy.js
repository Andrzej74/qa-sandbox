const apiKey = Cypress.env('apiKey');

describe('Negative scenarios – validation errors', () => {
  beforeEach(() => {
    cy.visit('/'); // upewnij się, że serwer działa
  });

  it('shows an error when registering without a password', () => {
    cy.get('[data-cy=reg-email]').type('eve.holt@reqres.in');
    cy.get('[data-cy=register-form]').submit();

    cy.get('[id=regResult]')
      .should('contain.text', 'Missing password')
      .and('have.class', 'text-success'); // można zmienić styl na .text-danger
  });

  it('shows an error when logging in with wrong credentials', () => {
    cy.get('[data-cy=log-email]').type('wrong@email.com');
    cy.get('[data-cy=log-pass]').type('incorrect');
    cy.get('[data-cy=login-form]').submit();

    cy.get('[id=logResult]')
      .should('contain.text', 'user not found')
      .and('have.class', 'text-success');
  });
});