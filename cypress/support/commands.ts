Cypress.Commands.add('createToken', () => {

  return cy.request({
    method: 'POST',
    url: '/auth',
    body: {
      username: Cypress.env('username'),
      password: Cypress.env('password')
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    return response.body.token as string
  })

})
