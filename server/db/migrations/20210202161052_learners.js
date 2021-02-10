exports.up = function (knex) {
  return knex.schema.createTable('learners', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('star_sign')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('learners')
}
