import React, { createContext, useReducer, useContext, useCallback } from 'react'
import asyncer from 'resources/middlewares/asyncer'
import { reducers, initialStates } from 'resources/reducers'

const Izanami = () => {

  const IzanamiStore = createContext()
  const useStore = () => useContext(IzanamiStore);

  const Provider = ({ children }) => {
    const [state, dispatcher] = useReducer(reducers, initialStates)
    const dispatch = useCallback(asyncer(dispatcher, state), [])
    return (
      <IzanamiStore.Provider value={{ state, dispatch }}>
        {children}
      </IzanamiStore.Provider>
    )
  }
  return {
    Provider,
    useStore,
  }
}

export default Izanami()
