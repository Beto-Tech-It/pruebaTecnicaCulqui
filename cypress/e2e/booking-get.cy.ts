describe('Booking - obtener reserva', () => {

  it('Happy Path - Debería hacerse la reserva mediante id', () => {

    cy.request('GET', '/booking/1').then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('firstname')
        expect(response.body).to.have.property('lastname')
        expect(response.body.bookingdates).to.have.property('checkin')
        expect(response.body.bookingdates).to.have.property('checkout')

      })

  })

  it('Unhappy Path - Debería devolver 404 por inválido ID', () => {

    cy.request({
      method: 'GET',
      url: '/booking/99999999',
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404)

    })

  })

})
