import React, { useState } from 'react'
import request from 'superagent'

function NewLearner (props) {
  const [form, setForm] = useState({
    name: '',
    starSign: ''
  })

  function onChange (event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function onSubmit (event) {
    event.preventDefault()
    request.post('/api/v1/learners')
      .send(form)
      .then(res => {
        props.update()
        setForm({
          name: '',
          starSign: ''
        })
        return null
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='name'>Learner&apos;s name:</label>
        <input id='name' name='name' onChange={onChange} />
      </div>
      <div>
        <label htmlFor='starSign'>Learner&apos;s sign:</label>
        <input id='starSign' name='starSign' onChange={onChange} />
      </div>
      <button>Add new learner</button>
    </form>
  )
}

export default NewLearner
