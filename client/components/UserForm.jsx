import React, { useState } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

function UserForm () {
  const [purchase, setPurchase] = useState({
    quantity: 0,
    dollar_amount: 0
  })

  function onSubmit (event) {
    event.preventDefault()

    const { quantity, dollar_amount: dollarAmount } = purchase
    if (quantity === 0 && dollarAmount === 0) return

    request.post('/api/v1/purchases')
      .send(purchase)
      .set('accept', 'json')
      .then(res => console.log(res))
      .catch(console.error)
  }

  function onChange (e) {
    const { name, value } = e.target
    setPurchase({
      ...purchase,
      [name]: Number(value)
    })
  }

  return (
    <div className='forms'>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Eth amount:</label>
          <input type='number' className='form-input' onChange={onChange} id='quantity' name='quantity' />
        </div>
        <div>
          <label htmlFor='name'>Purchase price:</label>
          <input type='number' className='form-input' onChange={onChange} id='dollar_amount' name='dollar_amount' />
        </div>
        <button className='form-submit-btn'>Add to portfolio</button>
      </form>
      <div>
        <button><Link to='/portfolio' style={{ textDecoration: 'none', color: 'inherit' }} >Show your portfolio</Link></button>
      </div>
    </div>
  )
}

export default UserForm
