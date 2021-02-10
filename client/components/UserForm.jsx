import React, { useState, useEffect } from 'react'
import request from 'superagent'

function UserForm () {
  const [purchase, setPurchase] = useState({
    quantity: 0,
    dollarAmount: 0
  })

  function clickHandler () {
    request.post('/api/v1/purchases')
  }

  function onChange () {

  }

  function newPurchase () {

  }

  return (
    <div className='forms'>
      <form >
        <div>
          <label htmlFor='name'>Eth amount:</label>
          <input className='form-input' id='name' name='name' />
        </div>
        <label htmlFor='name'>Purchase price:</label>
        <input className='form-input' id='name' name='name' />
        <button onClick={clickHandler} className='form-submit-btn'>Add to portfolio</button>
      </form>
    </div>
  )
}

export default UserForm
