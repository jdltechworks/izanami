import createReducer from '../../../utils/createReducer'

export const initialState = {
  token: null,
  loggedIn: false,
}

const authReducer = createReducer({
  login(state, action) {
    return state
  },
  loggedIn(state, action) {
    return {
      ...state,
      token: action.payload
    }
  }
})



export default authReducer
