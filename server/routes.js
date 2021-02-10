const express = require('express')

const db = require('./db/purchases')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getPurchases()
    .then(purchase => {
      res.json(purchase)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
      return null
    })
})

router.post('/', (req, res) => {
  const purchase = req.body
  db.addPurchase(purchase)
    .then(newPurchase => {
      res.json(newPurchase)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
