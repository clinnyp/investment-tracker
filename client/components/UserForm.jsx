import React, { useState, useEffect } from 'react'

function UserForm () {
  return (
    <div className='forms'>
      <form >
        <div>
          <label htmlFor='name'>Eth amount:</label>
          <input id='name' name='name' />
        </div>
        <button>Add new learner</button>
      </form>
    </div>
  )
}

export default UserForm
