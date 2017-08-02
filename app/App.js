import React from 'react'
import {
  connect,
} from 'react-redux'
import PropTypes from 'prop-types'
import {
  withRouter,
} from 'react-router-dom'

const App = props =>
  <div>
    <div>{props.children}</div>
  </div>

App.propTypes = {
  children: PropTypes.shape({}).isRequired,
}

export default withRouter(App)
