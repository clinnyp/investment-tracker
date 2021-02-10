exports.up = function (knex) {
  return knex.schema.createTable('purchases', table => {
    table.increments('id').primary()
    table.integer('quantity')
    table.integer('dollar_amount')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('purchases')
}
