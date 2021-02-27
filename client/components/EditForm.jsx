import React, { useState } from 'react'

import request from 'superagent'

function EditForm (props) {
  const [purchase, setPurchase] = useState({
    id: 0,
    quantity: 0,
    dollar_amount: 0
  })

  const id = props.match.params.id

  function onChange (e) {
    const { name, value } = e.target
    setPurchase({
      ...purchase,
      [name]: Number(value),
      id
    })
  }

  function onSubmit (event) {
    event.preventDefault()

    const { quantity, dollar_amount: dollarAmount } = purchase
    if (quantity === 0 || dollarAmount === 0) return

    request.patch('/api/v1/purchases')
      .send(purchase)
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
