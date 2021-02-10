exports.seed = function (knex) {
  return knex('learners').del()
    .then(function () {
      return knex('learners').insert([
        { id: 1, name: 'kenneth', star_sign: 'aquarius' },
        { id: 2, name: 'chris', star_sign: 'libra' },
        { id: 3, name: 'christo', star_sign: 'also libra' }
      ])
    })
}
