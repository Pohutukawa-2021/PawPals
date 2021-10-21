const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select('id',
      'auth0_id as auth0Id',
      'name',
      'email',
      'location')
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
