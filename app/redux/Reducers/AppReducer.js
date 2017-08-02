import * as mutate from './mutators'
import * as types from '../Actions/actionTypes'

const pipe = (fns, init) => fns.reduce((acc, fn) => fn(acc), init)

const initialState = {}

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default AppReducer
