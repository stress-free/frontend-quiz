import React from 'react'
import ReactDOM from 'react-dom'

const DefaultRoot = require('./Root').default

if (['development', 'local'].includes(process.env.NODE_ENV)) {
  /** Explanation of Hot Loading
  *
  *   webpack-dev-server (WDS) will push through websockets
  *   and fire the (module.hot) code, which informs the app
  *   of a code change.
  *
  *   We will hook into that and accept any changes that affect
  *   the Root element. We will reload it by requiring it again.
  *   Then react-hot-loader will do a hot-swap of the relevant
  *   components
  */
  const AppContainer = require('react-hot-loader').AppContainer
  // Trick babel to avoid hoisting <AppContainer />
  // transform-react-constant-elements
  const noHoist = {}

  const doRender = (Root) => {
    ReactDOM.render(
      <AppContainer {...noHoist}>
        <Root />
      </AppContainer>,
        document.getElementById('root'))
  }

  doRender(DefaultRoot)

  if (module.hot) {
    module.hot.accept('./Root', () => {
      // If you use Webpack 2 in ES modules mode, you can
      // use <App /> here rather than require() a <NextApp />.
      const Root = require('./Root').default
      doRender(Root)
    })
  }
} else {
  ReactDOM.render(<DefaultRoot />,
    document.getElementById('root')
  )
}
