exports.up = function (knex) {
  return knex.schema.createTable('dates', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.date('date')
    table.string('date_location')
    table.time('time')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dates')
}
