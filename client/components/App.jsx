import React from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import Registeration from './Registeration'
import RegisterDog from './RegisterDog'
import { Route } from 'react-router'
import Dogs from './Dogs'
import Dog from './Dog'

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Dogs} />
      <Route path='/register' component={Registeration} />
      <Route path='/register-dog' component={RegisterDog} />
      <Route exact path='/:id' component={Dog} />
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits,
    token: globalState.user.token
  }
}

export default connect(mapStateToProps)(App)
