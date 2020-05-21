import createReducer from './resources/utils/createReducer'

export const initialState = {
  verification_code: null,
}

const verifyReducer = createReducer({
  verified(state, action) {
    return state
  },
})



export default verifyReducer
