describe('Authentication flow – API only', () => {
  const email = 'eve.holt@reqres.in';
  const password = 'cityslicka';

  it('logs in successfully with valid credentials and API key (hardcoded)', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        email,
        password
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.token).to.exist;
    });
  });

  it('shows token in UI after register', () => {
    cy.visit('/');
    cy.get('[data-cy=reg-email]').type(email);
    cy.get('[data-cy=reg-pass]').type(password);
    cy.get('[data-cy=register-form]').submit();
  
    cy.get('[data-cy=reg-result]', { timeout: 3000 }).should('contain.text', 'token');
  });
});
