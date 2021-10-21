exports.seed = function (knex) {
  return knex('dates').del()
    .then(function () {
      return knex('dates').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          date: '2021-10-22',
          date_location: 'Cornwall Park',
          time: '14:00'
        }
      ])
    })
}
