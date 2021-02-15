import React, { useState, useEffect } from 'react'
import request from 'superagent'

function ListPortfolio () {
  const [portfolio, setPortfolio] = useState([{

  }])

  useEffect(() => {
    getPortfolio()
  }, [])

  function getPortfolio () {
    request.get('/api/v1/purchases')
      .then((res) => {
        setPortfolio(res.body)
        return null
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='portfolio-view'>
      <h2>Your portfolio below</h2>
      <ul>
        {portfolio.map(({ id, quantity, dollar_amount: dollarAmount }) => (
          <li key={id}>{`Amount: ${quantity} ETH  $: ${dollarAmount}`}<button>Delete</button><button>Edit</button></li>
        ))}
      </ul>
    </div>
  )
}

export default ListPortfolio
