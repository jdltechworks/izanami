import combineReducers from '../utils/combineReducers'

class IzanamiReducer {
  static initialStates = {}
  static registeredReducers = {}
  static reducers = () => {}
  constructor() {
    return this
  }
  register(name, initialStates, reducer) {
    this.initialStates = { ...this.initialStates, [name]: initialStates }
    this.registeredReducers = { ...this.registeredReducers, [name]: reducer }
    return this
  }
  useReducer() {
    this.reducers = combineReducers(this.registeredReducers)
    return this
  }
}

export default new IzanamiReducer()
