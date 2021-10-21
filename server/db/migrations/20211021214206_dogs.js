exports.up = function (knex) {
  return knex.schema.createTable('dogs', table => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id')
    table.string('breed')
    table.string('name')
    table.integer('age')
    table.string('sex')
    table.boolean('desexed')
    table.string('bio')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dogs')
}
