export const resetForm = (action, initialState) => state => ({
  ...state,
  [action.payload.form]: {
    ...initialState[action.payload.form],
  },
})

export default resetForm
