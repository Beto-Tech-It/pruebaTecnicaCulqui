import { Booking } from '../support/index.d'

describe('Booking - actualizar reserva', () => {

  let token: string

  before(() => {
    cy.createToken().then((generatedToken) => {
      token = generatedToken
    })
  })

  it('Happy Path - Debería actualizar la reserva correctamente.', () => {

    cy.fixture('bookingData').then((bookingBody: Booking) => {

      cy.request({
        method: 'PUT',
        url: '/booking/1',
        headers: {
          Cookie: `token=${token}`
        },
        body: bookingBody
      }).then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.firstname).to.eq(bookingBody.firstname)
        expect(response.body.lastname).to.eq(bookingBody.lastname)
        expect(response.body.totalprice).to.eq(bookingBody.totalprice)

      })

    })

  })

  it('Unhappy Path - Debería fallar la actualización sin token', () => {

    cy.fixture('bookingData').then((bookingBody: Booking) => {

      cy.request({
        method: 'PUT',
        url: '/booking/1',
        failOnStatusCode: false,
        body: bookingBody
      }).then((response) => {

        expect(response.status).to.eq(403)

      })

    })

  })

})
