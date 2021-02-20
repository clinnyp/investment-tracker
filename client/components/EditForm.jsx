import React, { useState } from 'react'

import request from 'superagent'

function EditForm () {
  const [purchase, setPurchase] = useState({
    quantity: 0,
    dollar_amount: 0
  })

  function onChange (e) {
    const { name, value } = e.target
    setPurchase({
      ...purchase,
      [name]: Number(value)
    })
    console.log(purchase)
  }

  function onSubmit (event) {
    event.preventDefault()

    const { quantity, dollar_amount: dollarAmount } = purchase
    if (quantity === 0 || dollarAmount === 0) return

    request.patch('/api/v1/purchases')
      .send({id})
      .set('accept', 'json')
      .then(res => console.log(res))
      .catch(console.error)
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
        <button className='form-submit-btn'>Make changes to purchase</button>
      </form>
    </div>
  )
}

export default EditForm
