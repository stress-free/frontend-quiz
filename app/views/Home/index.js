import React from 'react'
import {
  Link,
} from 'react-router-dom'

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <p>Home Component</p>
        <Link to="about">
          Link to about
        </Link>
        {/* TODO list of users goes here */}
      </div>
    )
  }
}

export default Home
