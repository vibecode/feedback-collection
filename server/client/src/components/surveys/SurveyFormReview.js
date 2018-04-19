import React from 'react'
import { connect } from 'react-redux'
import FIELDS from './formFields'
import _ from 'lodash'

const SurveyReview = ( { onCancel, formValues }) => {
  const reviewFields = _.map(FIELDS, ( { name, label }) => {
    return (
        <div>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
        </div>
    )
  })

  return (
      <div>
        <h5>Please review and confirm your entries</h5>
        {reviewFields}
        <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
        <button className="green  darken-3 btn-flat right" onClick={null}>Send survey
          <i className="material-icons right">email</i>
        </button>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps)(SurveyReview)