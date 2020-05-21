import React from 'react'
import Izanami from './resources/izanami'
import izanamiReducer from './resources/izanami/izanamiReducer'
import authReducer, { initialState as authInitialState } from './resources/reducers/auth'
import formReducer, { initialState as formInitialState } from './resources/reducers/form'
import registerReducer, { initialState } from './resources/reducers/register'

const { Provider } = Izanami

izanamiReducer.register('auth', authInitialState, authReducer)
izanamiReducer.register('form', formInitialState, formReducer)
izanamiReducer.register('register', initialState, registerReducer)

const App = () => {
  return (
    <Provider>
    </Provider>
  )
}

export default App

