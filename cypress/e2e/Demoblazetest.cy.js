describe('Demoblaze Sign In and Add to Cart', () => {
    it('Vist page test', () => {
      cy.visit('https://www.demoblaze.com/index.html')
    })

    it('should sign in successfully', () => { 
      cy.intercept('GET', '**').as('allRequests');
       cy.wait('@allRequests').then((interception) => { 
        cy.log('Request URL:', interception.request.url); 
        cy.log('Response Status Code:', interception.response.statusCode);
       });

     
    cy.get('#login2', { timeout: 20000 }).should('be.visible').click;
    cy.get('#loginusername', { timeout: 20000 }).should('be.visible').type('SathiyaCypress'); 
      cy.get('#loginpassword', { timeout: 20000 }).should('be.visible').type('Test@12345');
      cy.get('button[onclick="logIn()"]', { timeout: 20000 }).should('be.visible').click();
       cy.get('#nameofuser', { timeout: 20000 }).should('contain', 'Welcome SathiyaCypress');
     });

     it('should add multiple quantities of a product to the cart', () => { 
     //cy.visit('https://www.demoblaze.com'); cy.wait(2000); 
       cy.get('.card-block a').contains('Add to cart').first().click(); 
       cy.on('window:alert', (str) => { expect(str).to.equal('Product added.');
        expect(str).to.equal('Product added.');
  });

  // Add the same product again 
  //cy.visit('https://www.demoblaze.com'); 
  
  cy.get('.card-block a').contains('Add to cart').first().click();
   cy.on('window:alert', (str) => { expect(str).to.equal('Product added.'); }); 
   cy.get('#cartur').click(); cy.get('#tbodyid tr', { timeout: 20000 }).should('have.length.greaterThan', 1); 
  });
});

