import {
  RESET_FORM,
} from '../actionTypes'

/**
 * Takes in the name of a form and sets it to the initial state of that form.
 * This will be commonly called after form submit to reset the form.
 *
 * @param {string} form - the name of the form being reset
 */
export const resetForm = ({ form, }) => ({
  type: RESET_FORM,
  payload: {
    form,
  },
})

export default resetForm
