import validator from '../validator'
import createReducer from '../../utils/createReducer'
import keys from 'lodash/keys'

export const initialState = {
  name: { error: null },
  email: { error: null },
  password: { error: null },
  phone: { error: null },
  password_confirmation: { error: null },
  verification_code: { error: null },
  incomplete: true,
  autheticated: false,
}

const formReducer = createReducer({
  textChange(state, action) {
    const [key] = keys(action.payload)
    const value = action.payload[key]
    const validatorElems = validator[key]
    const pattern = new RegExp(validatorElems.pattern, 'i')
    if (pattern.test(value)) {
      return {
        ...state,
        [key]: { value, error: null },
        incomplete: false,
      }
    }
    return {
      ...state,
      [key]: { value, error: `Invalid ${key} ` },
      incomplete: true,
    }
  },
})



export default formReducer
