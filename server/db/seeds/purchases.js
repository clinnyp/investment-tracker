exports.seed = function (knex) {
  return knex('purchases').del()
    .then(function () {
      return knex('purchases').insert([
        { id: 1, quantity: 1.5, dollar_amount: 512.39 },
        { id: 2, quantity: 1, dollar_amount: 492.66 },
        { id: 3, quantity: 0.5, dollar_amount: 701.99 }
      ])
    })
}
