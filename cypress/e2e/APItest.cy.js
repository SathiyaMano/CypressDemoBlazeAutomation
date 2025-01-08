describe('Petstore API Tests', () => {
    const apiUrl = 'https://petstore.swagger.io/v2';
    const apiKey = 'special-key'; 
  
    it('should add a new pet to the store', () => {
      const pet = {
        id: 12345,
        name: 'Fluffy',
        status: 'available'
      };
  
      cy.request({
        method: 'POST',
        url: `${apiUrl}/pet`,
        headers: {
          'api_key': apiKey,
          'Content-Type': 'application/json'
        },
        body: pet
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', pet.id);
        expect(response.body).to.have.property('name', pet.name);
        expect(response.body).to.have.property('status', pet.status);
      });
    });
  
    it('should find pet by ID', () => {
      const petId = 12345;
  
      cy.request({
        method: 'GET',
        url: `${apiUrl}/pet/${petId}`,
        headers: {
          'api_key': apiKey
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        expect(response.body).to.have.property('name', 'Fluffy');
        expect(response.body).to.have.property('status', 'available');
      });
    });
  });
  