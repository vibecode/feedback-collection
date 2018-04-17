import React from 'react'

export default ({ input, label, meta: { error, touched} }) => {
  return (
      <div>
        <label>{label}</label>
        <input {...input} onBlur={input.onBlur} onChange={input.onChange} />
        <div className="red-text" style={{marginBottom: '20px'}}>
          {touched && error}
        </div>
      </div>
  )
}