import React, { useState, useEffect } from 'react'

function UserForm () {
  return (
    <div>
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
    </div>
  )
}

export default UserForm
