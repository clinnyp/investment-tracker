import React, { useState, useEffect } from 'react'

function UserForm () {
  return (
    <div className='forms'>
      <form >
        <div>
          <label htmlFor='name'>Eth amount:</label>
          <input className='form-input' id='name' name='name' />
        </div>
        <button className='form-submit-btn'>Add to portfolio</button>
      </form>
    </div>
  )
}

export default UserForm
