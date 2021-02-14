import React from 'react'
import { Route } from 'react-router-dom'

import CurrentPrice from './CurrentPrice'
import UserForm from './UserForm'
import ListPortfolio from './ListPortfolio'

const App = () => {
  return (
    <div>
      <Route path='/' component={CurrentPrice} />
      <Route exact path='/' component={UserForm} />
      <Route exact path='/portfolio' component={ListPortfolio} />
    </div>
  )
}

export default App
