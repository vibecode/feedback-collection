import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
      <div>
        Dashboard
        <div className="fixed-action-btm">
          <Link to="/surveys/new" className="btn-floating  waves-effect waves-light btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
  )
}

export default Dashboard
