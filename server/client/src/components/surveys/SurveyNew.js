import React, { Component } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'
import { reduxForm } from 'redux-form'

class SurveyNew extends Component {
  //babel shortcut
  state = { showReview: false }

  renderContent() {
    if (this.state.showReview) {
      return <SurveyFormReview onCancel={() => this.setState({showReview: false})}/>
    }

    return <SurveyForm onSurveySubmit={() => this.setState({showReview: true})} />
  }

  render() {
    return (
       this.renderContent()
    )
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew)