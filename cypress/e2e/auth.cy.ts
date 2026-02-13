describe('Autenticacion - Creacion de token', () => {

  it('Happy Path - Deberia crear un token exitosamente', () => {

    cy.createToken().then((token: string) => {
      expect(token).to.exist
      expect(token).to.be.a('string')
    })

  })

  it('Unhappy Path - Debería fallar con credenciales incorrectas', () => {

    cy.request({
      method: 'POST',
      url: '/auth',
      failOnStatusCode: false,
      body: {
        username: "admin",
        password: "ewluihqlfulwfluhe" // Contraseña incorrecta
      }
    }).then((response) => {

      expect(response.status).to.eq(200) // La API devuelve 200 incluso con credenciales incorrectas
      expect(response.body).to.have.property('reason')

    })

  })

})
