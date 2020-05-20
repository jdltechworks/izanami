const createReducer = (handlers, initialState = {}) => {
  const reducer = (state = initialState, action) => {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
  return reducer
}

export default createReducer
