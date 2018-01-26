import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return
      case false:
        return <li><a href="/auth/google">Login with google</a></li>
      default:
        return <li><a href="http://localhost:5000/api/logout">Logout</a></li>
    }
  }

  render() {
    return (
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">
              Home
            </a>
            <ul className="right">
        {this.renderContent()}
            </ul>
          </div>
        </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(Header)