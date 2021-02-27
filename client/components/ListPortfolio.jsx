import React, { useState, useEffect } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

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

  function onClickDelete (e) {
    const { id } = e.target
    e.preventDefault()
    request.delete('/api/v1/purchases')
      .send({ id })
      .set('Accept', 'application/json')
      .then(res => {
        getPortfolio()
        return null
      })
      .catch(err => console.error(err))
  }

  const linkStyle = {
    textDecoration: 'none',
    textAlign: 'center'
  }

  return (
    <div className='portfolio-view'>
      <h2>Your portfolio below</h2>
      <Link to='/' style={linkStyle}><p>Add more</p></Link>
      <ul>
        {portfolio.map(({ id, quantity, dollar_amount: dollarAmount }) => (
          <li key={id}>{`Amount: ${quantity} ETH  $: ${dollarAmount}`}<button id={id}
            onClick={onClickDelete}>Delete</button><button>
            <Link to={`/edit/${id}`} >Edit</Link></button></li>
        ))}
      </ul>
    </div>
  )
}

export default ListPortfolio
