describe('UI Tests', function() {
    it('should navigate to Success Page after submitting.',function(){
           cy.visit('http://localhost:3000');
           cy.get('h1').as('Graph QL Jobs');
           cy.get('.card-title');
           cy.get('.card-text').as('Date Posted:');
           cy.get('.card-text').as('Location:');
           cy.server()           // enable response stubbing
           cy.route({
           method: 'POST',      // Route all Post requests
           url: 'https://api.graphql.jobs/*',  // that have a URL that matches '/api.graphql.jobs/*'
           response: []        // and force the response to be: []
            })    
     });
   });