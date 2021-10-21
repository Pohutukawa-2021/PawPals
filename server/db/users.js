const connection = require('./connection')

function getUsers (id, db = connection) {
  return db('users')
    .where('auth0_id', id)
    .select('id',
      'auth0_id as auth0Id',
      'name',
      'email',
      'location')
    .first()
}

function addUser (input, db = connection) {
  const { auth0Id, name, email, location } = input
  const user = { auth0_id: auth0Id, name, email, location }
  return db('users')
    .insert(user)
}

module.exports = {
  getUsers,
  addUser
}
