describe('User listing', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('fetches and displays a list of users', () => {
      cy.intercept('GET', '**/users?page=1').as('getUsers');
      cy.get('[data-cy=get-users]').click();
      cy.wait('@getUsers').its('response.statusCode').should('eq', 200);
      cy.get('[data-cy=users-table] tbody tr').should('have.length.at.least', 1);
    });
  });
  