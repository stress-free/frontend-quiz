import * as mutate from './mutators'
import * as types from '../Actions/actionTypes'

const pipe = (fns, init) => fns.reduce((acc, fn) => fn(acc), init)

const initialState = {
  // Form goes here
}

export const FormsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FORM:
      return pipe([
        mutate.updateForm(action),
      ], state)
    case types.RESET_FORM:
      return pipe([
        mutate.resetForm(action, initialState),
      ], state)
    default: return state
  }
}

export default FormsReducer
