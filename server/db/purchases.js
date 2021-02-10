const connection = require('./connection')

module.exports = {
  getPurchases,
  addPurchase
}

function getPurchases (db = connection) {
  return db('purchases').select('dollar_amout as dollarAmount', 'quantity')
}

function addPurchase (purchase, db = connection) {
  return db('purchases')
    .insert(purchase)
    .then(latestPurchase => latestPurchase)
}
