const connection = require('./connection')

module.exports = {
  getDates,
  cancelDate
}

function getDates (date, location, time, db = connection) {
  return db('dates')
    .join('users', 'auth0_id', 'users.auth0_id')
    .where('date', date)
    .where('location', location)
    .where('time', time)
    .select()
    .then((result) => {
      return result[0]
    })
}

function cancelDate (id, auth0Id, db = connection) {
  return db('dates')
    .where('auth0_id', auth0Id)
    .where('dates.id', id)
    .del(id)
}
