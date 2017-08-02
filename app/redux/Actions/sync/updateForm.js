import {
  UPDATE_FORM,
} from '../actionTypes'

export const updateForm = ({ form, key, value, }) => ({
  type: UPDATE_FORM,
  payload: {
    form,
    key,
    value,
  },
})

export default updateForm
