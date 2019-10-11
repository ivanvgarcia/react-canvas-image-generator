/* eslint-disable no-undef */
describe('Landing page', function() {
  it('Finds the title', function() {
    cy.visit('/');
    cy.get('h1').should('contain', 'Cocoppa Doll Generator');
    cy.get('a').should('contain', 'Create Your Avatar');
    cy.get('button').should('contain', 'Twitter Login');
    cy.get('a').click();
    cy.url('http://localhost:3000/avatar-generator');
  });

  it('fetches avatars from API', () => {
    cy.request('http://localhost:5000/api/v1/avatar').should(response => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');
    });
  });
});
