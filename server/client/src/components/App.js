import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'

import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
        <div>
          <BrowserRouter>
            <div className="container">
              <Header />
              <Route path="/" exact component={Landing} />
              <Route path="/surveys" exact component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </BrowserRouter>
        </div>
    )
  }
}

export default connect(null, actions)(App);
