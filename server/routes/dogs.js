const express = require('express')

const db = require('../db/dogs')
const router = express.Router()

// middleware for checking permissions (authorization)

// POST /api/v1/users/protected
router.post('/', async (req, res) => {
  const { auth0Id, name, email, location } = req.body
  const user = { auth0Id, name, email, location }

  try {
    await db.addUser(user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert user into the database' })
  }
})

// public - an endpoint that anyone can access
// GET /api/v1/users/public
router.get('/public', (req, res) => {
  res.json({ message: 'I\'m a public endpoint, any one can access me.' })
})

// GET /api/v1/users/
router.get('/', (req, res) => {
  db.getDogs()
    .then(dogs => {
      console.log(dogs)
      res.json(dogs)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/users/auth0|12334
module.exports = router
