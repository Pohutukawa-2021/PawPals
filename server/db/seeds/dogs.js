exports.seed = function (knex) {
  return knex('dogs').del()
    .then(function () {
      return knex('dogs').insert([
        {
          id: 1,
          user_id: 'auth0|61414f84d35ac900717bc280',
          breed: 'Doberman',
          name: 'Bam',
          age: 2,
          sex: 'male',
          desexed: true,
          bio: 'playful and loves the water',
          image: './bam.png',
          location: 'East Auckland'
        },
        {
          id: 2,
          user_id: '20030bgf',
          breed: 'Cavoodle',
          name: 'Juno',
          age: 4,
          sex: 'female',
          desexed: true,
          bio: 'loves running and playing tag',
          image: './juno.png',
          location: 'South Auckland'
        }
      ])
    })
}
