import React, { useState, useEffect } from 'react'
import request from 'superagent'

import NewLearner from './NewLearner'

function Learners () {
  const [learners, setLearners] = useState([])

  useEffect(() => {
    getLearners()
  }, [])

  function getLearners () {
    request.get('/api/v1/learners')
      .then(res => {
        setLearners(res.body)
        return null
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <ul>
        {learners.map(learner => (
          <li key={learner.id}>{learner.name}</li>
        ))}
      </ul>
      <NewLearner update={getLearners} />
    </>
  )
}

export default Learners
