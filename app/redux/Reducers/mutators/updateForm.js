export const updateForm = action => state => ({
  ...state,
  [action.payload.form]: {
    ...state[action.payload.form],
    [action.payload.key]: action.payload.value,
  },
})

export default updateForm
