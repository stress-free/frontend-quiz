import React from 'react'
import {
  Link,
} from 'react-router-dom'

class About extends React.PureComponent {
  render() {
    return (
      <div>
        <p>
          About Component
        </p>
        <Link to="/">
          Link to home
        </Link>
      </div>
    )
  }
}

export default About
