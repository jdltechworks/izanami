const combineReducers =  (reducers = {}) => (state = {}, action) =>
  Object.assign({}, state,
    ...Object.keys(reducers).map(key => ({
      [key]: reducers[key](state[key], action),
  })),
)

export default combineReducers
