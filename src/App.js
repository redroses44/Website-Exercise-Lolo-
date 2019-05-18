import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Articles from './components/Articles'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Articles} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
