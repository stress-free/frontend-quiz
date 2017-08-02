import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'
import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo'
import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'
import {
  createTracker,
} from 'redux-segment'

import * as Reducers from './Reducers'

const GRAPHQL_HOST = 'https://api.graph.cool/simple/v1/cj5vboexk68vw01236ajp8mkr'

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_HOST,
})

export const client = new ApolloClient({ networkInterface, })

export const browserHistory = createBrowserHistory()

const tracker = createTracker()

const middlewares = [
  thunk,
  routerMiddleware(browserHistory),
  client.middleware(),
  tracker,
]

/* middlewares to use in dev and staging */
if (process.env.NODE_ENV !== 'production') {
  /* Redux logger only in dev */
  // eslint-disable-next-line
  const { createLogger, } = require('redux-logger')

  const logger = createLogger({ collapsed: true, })
  middlewares.push(logger)
}

const AllReducers = combineReducers({
  apollo: client.reducer(),
  app: Reducers.AppReducer,
  forms: Reducers.FormsReducer,
  routing: routerReducer,
})

const appliedMiddlewares = applyMiddleware(...middlewares)

const Store = createStore(
  AllReducers,
  {},
  appliedMiddlewares,
)

export default Store
