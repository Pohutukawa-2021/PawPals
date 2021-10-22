const express = require('express')

const db = require('../db/dogs')
const router = express.Router()

// middleware for checking permissions (authorization)

// POST /api/v1/users/protected
router.post('/', async (req, res) => {
  const { breed, name, age, sex, desexed, bio } = req.body.newDog
  const id = req.body.id
  const dog = { breed, name, age, sex, desexed, bio }

  try {
    await db.addDog(dog, id)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert dog into the database' })
  }
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
