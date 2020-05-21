import createReducer from './resources/utils/createReducer'

export const initialState = {
  register: false,
}

const registerReducer = createReducer({
  registered(state, action) {
    return state
  },
  registerationFailed(state, action) {
    return state
  }
})



export default registerReducer
