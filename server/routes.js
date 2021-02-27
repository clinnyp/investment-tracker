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

router.delete('/', (req, res) => {
  const { id } = req.body
  db.deletePurchase(id)
    .then(() => {
      res.set(200).send('OK')
      return null
    })
    .catch(err => console.error(err))
})

router.patch('/', (req, res) => {
  const { id, quantity, dollar_amount: dollarAmount } = req.body
  const numId = Number(id)

  const obj = {
    quantity,
    dollarAmount
  }
  db.updatePurchase(numId, obj)
    .then(updatePurchase => res.json(updatePurchase))
    .catch(err => {
      res.status(500).send('DATABASE EROOR: ' + err.message)
    })
})
