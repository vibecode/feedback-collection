const keys = require('../../config/keys')

module.exports = survey => {
  return (
      `<div>
          <p>${survey.body}</p>
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
       </div>`
  )
}

