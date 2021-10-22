const express = require('express')

const db = require('../db/dates')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllDates()
    .then(dates => {
      res.json(dates)
      return null
    }).catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', async (req, res) => {
  const date = req.body.newDate
  const user = req.body.auth
  try {
    await db.addDate(date, user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert dates into the database' })
  }
})

module.exports = router
