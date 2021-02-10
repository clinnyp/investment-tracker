const connection = require('./connection')

module.exports = {
  getLearners,
  addLearner
}

function getLearners (db = connection) {
  return db('learners').select()
}

function addLearner (learner, db = connection) {
  const learnerEntity = {
    name: learner.name,
    star_sign: learner.starSign
  }
  return db('learners')
    .insert(learnerEntity)
    .then(([id]) => {
      return {
        id,
        ...learner
      }
    })
}
