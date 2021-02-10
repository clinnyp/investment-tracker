import React, { useState, useEffect } from 'react'
import request from 'superagent'

function CurrentPrice () {
  const URL = 'https://api.coinlore.net/api/ticker/?id=80'
  const [price, setPrice] = useState(null)

  useEffect(() => {
    request.get(URL)
      .then(res => {
        setPrice(res.body[0].price_usd)
        return null
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='price-card'>
      <h1>Ethereum</h1>
      <p>USD:${price} </p>
    </div>
  )
}

export default CurrentPrice
