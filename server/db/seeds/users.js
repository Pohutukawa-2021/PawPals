exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          name: 'kelmarna',
          email: 'kelmarna@email.nz',
          location: 'auckland'
        },
        {
          id: 2,
          auth0_id: '20030bgf',
          name: 'testuser',
          email: 'testuser@gmail.com',
          location: 'auckland'
        }
      ])
    })
}
