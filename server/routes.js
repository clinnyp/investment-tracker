const express = require('express')

const db = require('./db/learners')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getLearners()
    .then(learners => {
      res.json(learners)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
      return null
    })
})

router.post('/', (req, res) => {
  const learner = req.body
  db.addLearner(learner)
    .then(newLearner => {
      res.json(newLearner)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
